import type { MetadataRoute } from 'next';

const manifest: MetadataRoute.Manifest = {
  name: 'Codevera Academy',
  short_name: 'Codevera',
  description:
    'Codevera Academy offers comprehensive coding courses, workshops, and community resources to help software enthusiasts improve their skills and advance their careers.',
  start_url: '/',
  display: 'standalone',
  background_color: '#ffffff',
  theme_color: '#08253f',
};

export default manifest;
