import type { Metadata } from 'next';
import { SignIn } from '@clerk/nextjs';

import {
  openGraphDefaults,
  twitterDefaults,
} from '@/utils/metadata/shared-metadata';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://academy.codevera.org/sign-in',
  },
  title: 'Sign In',
  description:
    'Sign in to Codevera Academy to access your personalized learning dashboard, track your progress, and continue your journey in software development.',
  openGraph: {
    ...openGraphDefaults,
    title: 'Sign In',
    description:
      'Sign in to Codevera Academy to unlock your personalized learning experience. Access courses, track progress, and advance your coding skills.',
    url: 'https://academy.codevera.org/sign-in',
  },
  twitter: {
    ...twitterDefaults,
    title: 'Sign In',
    description:
      'Sign in to Codevera Academy to access your personalized dashboard and continue your journey in coding and software development.',
  },
  robots: 'noindex, nofollow',
};

const LoginPage = () => {
  return <SignIn />;
};

export default LoginPage;
