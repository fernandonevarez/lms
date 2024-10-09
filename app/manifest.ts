import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CodeDevils' Academy",
    short_name: "CodeDevils' Academy",
    description:
      "Grow your software development skills with CodeDevils, Arizona State University's largest software development student organization. Learn, build, and network with us!",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#ffffff',
  };
}
