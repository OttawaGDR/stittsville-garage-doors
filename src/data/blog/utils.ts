export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export function formatBlogDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Toronto',
  });
}

export function estimateReadMinutes(blocks: { type: string; text?: string; items?: string[] }[]): number {
  const text = blocks
    .map((b) => {
      if (b.type === 'ul' || b.type === 'ol') return (b.items ?? []).join(' ');
      return 'text' in b ? b.text ?? '' : '';
    })
    .join(' ');
  return Math.max(4, Math.ceil(text.split(/\s+/).length / 200));
}
