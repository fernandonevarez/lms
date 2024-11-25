import type { Metadata } from 'next';
import {
  openGraphDefaults,
  twitterDefaults,
} from '@/utils/metadata/shared-metadata';

export const metadata: Metadata = {
  keywords: [
    'Codevera Academy articles',
    'coding articles',
    'software development insights',
    'in-depth coding tutorials',
    'learn programming concepts',
    'software development best practices',
    'advance coding knowledge',
  ],
  alternates: {
    canonical: 'https://academy.codevera.org/articles',
  },
  title: 'Explore Articles',
  description:
    'Explore in-depth articles on a wide range of software development topics at Codevera Academy. Gain insights, learn best practices, and deepen your coding knowledge.',
  openGraph: {
    ...openGraphDefaults,
    title: 'Explore Articles',
    description:
      'Browse articles on coding and software development topics at Codevera Academy. Learn in-depth concepts and best practices to advance your skills.',
    url: 'https://academy.codevera.org/articles',
  },
  twitter: {
    ...twitterDefaults,
    title: 'Explore Articles',
    description:
      'Discover a variety of articles on coding and software development topics. Learn best practices and expand your knowledge with Codevera Academy.',
  },
};

const Articles = () => {
  return <div>Articles Page</div>;
};

export default Articles;
