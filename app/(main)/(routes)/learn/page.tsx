import type { Metadata } from 'next';
import {
  openGraphDefaults,
  twitterDefaults,
} from '@/utils/metadata/shared-metadata';

export const metadata: Metadata = {
  keywords: [
    'user dashboard',
    'track coding progress',
    'course recommendations',
    'Codevera Academy dashboard',
    'coding progress overview',
    'learn to code progress tracking',
    'next steps in software development',
  ],
  alternates: {
    canonical: 'https://academy.codevera.org/learn',
  },
  title: 'Your Learning Dashboard',
  description:
    'Track your progress on the courses you are enrolled in at Codevera Academy. Get personalized recommendations on what to learn next and insights into your software development journey.',
  openGraph: {
    ...openGraphDefaults,
    title: 'Your Learning Dashboard',
    description:
      'View your progress on enrolled courses at Codevera Academy. Get personalized course recommendations and insights to advance your software development skills.',
    url: 'https://academy.codevera.org/learn',
  },
  twitter: {
    ...twitterDefaults,
    title: 'Your Learning Dashboard',
    description:
      'Track your progress, get course recommendations, and stay motivated in your software development journey with Codevera Academy.',
  },
};

const OnboardingPage = () => {
  return <div>This is the user&apos;s learning dashboard.</div>;
};

export default OnboardingPage;
