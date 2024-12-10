import type { Metadata } from 'next';
import {
  openGraphDefaults,
  twitterDefaults,
} from '@/utils/metadata/shared-metadata';

export const metadata: Metadata = {
  keywords: [
    'Codevera Academy catalog',
    'explore coding courses',
    'learn software development',
    'online coding resources',
    'coding workshops and courses',
    'find programming tutorials',
    'software development resources',
  ],
  alternates: {
    canonical: 'https://academy.codevera.org/catalog',
  },
  title: 'Explore Our Catalog',
  description:
    'Explore all the coding courses, workshops, and resources available at Codevera Academy. Find what you want to learn next and advance your software development skills.',
  openGraph: {
    ...openGraphDefaults,
    title: 'Explore Our Catalog',
    description:
      'Discover a wide range of coding courses, workshops, and resources at Codevera Academy. Explore our catalog and choose what you want to learn to advance your career in software development.',
    url: 'https://academy.codevera.org/catalog',
  },
  twitter: {
    ...twitterDefaults,
    title: 'Explore Our Catalog',
    description:
      'Browse through Codevera Academy’s resources, including coding courses and workshops. Find what you want to learn next and start your software development journey.',
  },
};

const CoursesPage = () => {
  return <div>Catalog Page</div>;
};

export default CoursesPage;
