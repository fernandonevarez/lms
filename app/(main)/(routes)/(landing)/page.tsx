import type { Metadata } from 'next';
import {
  openGraphDefaults,
  twitterDefaults,
} from '@/utils/metadata/shared-metadata';

import { SignOutButton } from '@clerk/nextjs';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://academy.codevera.org/',
  },
  keywords: [
    'Codevera Academy',
    'learn to code',
    'coding courses for beginners',
    'free online coding education',
    'software development training',
    'start coding journey',
    'career in software development',
    'learn programming basics',
  ],
  title: 'Learn to Code - For Free',
  description:
    'Learn more about Codevera Academy, where aspiring developers can start their journey in software development. Access free coding courses, workshops, and community resources to kickstart your career in tech.',
  openGraph: {
    ...openGraphDefaults,
    title: 'Learn to Code - For Free',
    description:
      'Discover Codevera Academy - the perfect place for aspiring developers to start learning coding for free. Explore engaging courses, hands-on workshops, and supportive community resources to advance your software development skills.',
    url: 'https://academy.codevera.org/',
  },
  twitter: {
    ...twitterDefaults,
    title: 'Learn to Code - For Free',
    description:
      'Learn more about Codevera Academy, offering free coding courses and workshops. Start your journey in software development and advance your career with our community support.',
  },
};

export default function Home() {
  return (
    <div className='flex flex-col gap-y-2'>
      <p className='text-center md:text-start'>landing page</p>
      <div className='text-center md:text-start'>
        <SignOutButton />
      </div>
    </div>
  );
}
