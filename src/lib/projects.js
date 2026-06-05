import matter from 'gray-matter';
import manifest from '../data/projects-manifest.json';

function pickLang(project, lang) {
  return lang === 'en' ? project.en : project.pt;
}

export function getProjects(lang) {
  return manifest.projects
    .filter((project) => project.published !== false)
    .sort((a, b) => a.order - b.order)
    .map((project) => {
      const fields = pickLang(project, lang);
      return {
        id: project.slug,
        slug: project.slug,
        order: project.order,
        heroSrc: project.heroSrc,
        images: project.images.map((image) => ({
          src: image.src,
          alt: image.alt,
        })),
        category: fields.category,
        title: fields.title,
        partner: fields.partner,
        brief: fields.brief,
        url: fields.url,
        link: fields.link,
        proof: fields.proof,
      };
    });
}

export function getProjectBySlug(slug, lang) {
  const project = manifest.projects.find((entry) => entry.slug === slug);
  if (!project || project.published === false) return null;

  const fields = pickLang(project, lang);
  return {
    slug: project.slug,
    order: project.order,
    heroSrc: project.heroSrc,
    images: project.images.map((image) => ({
      src: image.src,
      alt: image.alt,
    })),
    category: fields.category,
    title: fields.title,
    partner: fields.partner,
    brief: fields.brief,
    url: fields.url,
    link: fields.link,
    proof: fields.proof,
  };
}

export async function fetchProjectMarkdown(slug, lang) {
  const file = lang === 'en' ? 'project.en.md' : 'project.md';
  const fallback = lang === 'en' ? 'project.md' : null;

  let response = await fetch(`/projects/${slug}/${file}`);
  if (!response.ok && fallback) {
    response = await fetch(`/projects/${slug}/${fallback}`);
  }
  if (!response.ok) return null;

  const raw = await response.text();
  const { data, content } = matter(raw);
  return {
    frontmatter: data,
    body: content.trim(),
  };
}
