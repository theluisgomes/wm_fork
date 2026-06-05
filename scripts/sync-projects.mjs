import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import matter from 'gray-matter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const projectsDir = path.join(root, 'public', 'projects');
const outFile = path.join(root, 'src', 'data', 'projects-manifest.json');

const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.avif']);

function listImages(imgDir, slug) {
  if (!fs.existsSync(imgDir)) return [];
  return fs
    .readdirSync(imgDir)
    .filter((name) => IMAGE_EXT.has(path.extname(name).toLowerCase()))
    .sort()
    .map((filename) => ({
      filename,
      src: `/projects/${slug}/IMG/${filename}`,
      alt: filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
    }));
}

function readFrontmatter(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);
  const firstParagraph = content.trim().split(/\n\n+/)[0]?.replace(/\s+/g, ' ').trim() ?? '';
  const brief = data.brief || firstParagraph.slice(0, 200);
  return normalizeMeta({ ...data, brief });
}

function normalizeMeta(data) {
  const url = data.url ?? data.embed ?? null;
  return {
    ...data,
    url,
    link: data.link ?? url,
  };
}

function toLangFields(data, slug) {
  if (!data) {
    return {
      title: slug,
      category: '',
      partner: '',
      brief: '',
      url: null,
      link: null,
      proof: null,
    };
  }
  return {
    title: data.title ?? slug,
    category: data.category ?? '',
    partner: data.partner ?? '',
    brief: data.brief ?? '',
    url: data.url ?? null,
    link: data.link ?? null,
    proof: data.proof ?? null,
  };
}

const slugs = fs
  .readdirSync(projectsDir, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const projects = slugs.map((slug) => {
  const projectDir = path.join(projectsDir, slug);
  const pt = readFrontmatter(path.join(projectDir, 'project.md')) ?? {};
  const en = readFrontmatter(path.join(projectDir, 'project.en.md'));
  const images = listImages(path.join(projectDir, 'IMG'), slug);
  const heroFile = pt.hero ?? images[0]?.filename ?? null;
  const heroSrc = heroFile ? `/projects/${slug}/IMG/${heroFile}` : images[0]?.src ?? null;

  const published = pt.published !== false && (en?.published !== false);
  return {
    slug,
    order: pt.order ?? en?.order ?? 999,
    published,
    hero: heroFile,
    heroSrc,
    images,
    pt: toLangFields(pt, slug),
    en: toLangFields(en ?? pt, slug),
    meta: normalizeMeta({ ...pt, ...(en ?? {}) }),
  };
});

projects.sort((a, b) => a.order - b.order);

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, `${JSON.stringify({ generatedAt: new Date().toISOString(), projects }, null, 2)}\n`);
console.log(`Synced ${projects.length} project(s) → ${path.relative(root, outFile)}`);
