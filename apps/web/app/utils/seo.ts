export interface MetaDescriptor {
  title?: string;
  description?: string;
  'og:title'?: string;
  'og:description'?: string;
  'og:image'?: string;
  'og:type'?: string;
  'twitter:card'?: string;
  'twitter:title'?: string;
  'twitter:description'?: string;
  'twitter:image'?: string;
}

export function createMeta({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image?: string;
}): MetaDescriptor[] {
  const siteName = "Beepa's";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;

  const meta: MetaDescriptor[] = [
    { title: fullTitle },
    { description },
    { 'og:title': fullTitle },
    { 'og:description': description },
    { 'og:type': 'website' },
    { 'twitter:card': 'summary_large_image' },
    { 'twitter:title': fullTitle },
    { 'twitter:description': description },
  ];

  if (image) {
    meta.push({ 'og:image': image });
    meta.push({ 'twitter:image': image });
  }

  return meta;
}
