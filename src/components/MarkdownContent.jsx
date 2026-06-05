import { useMemo } from 'react';
import { marked } from 'marked';

marked.setOptions({ gfm: true, breaks: true });

export default function MarkdownContent({ content, className = 'project-body' }) {
  const html = useMemo(() => {
    if (!content) return '';
    return marked.parse(content);
  }, [content]);

  if (!content) return null;

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
