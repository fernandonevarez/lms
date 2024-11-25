import type { Metadata } from 'next';
import {
  openGraphDefaults,
  twitterDefaults,
} from '@/utils/metadata/shared-metedata';
import { SignUp } from '@clerk/nextjs';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://academy.codevera.org/sign-up',
  },
  title: 'Sign Up',
  description:
    'Sign up for Codevera Academy to begin your journey in software development. Access coding courses, workshops, and a supportive community to boost your skills.',
  openGraph: {
    ...openGraphDefaults,
    title: 'Sign Up',
    description:
      'Create an account at Codevera Academy to start learning coding today. Unlock courses, workshops, and community support to advance your software development skills.',
    url: 'https://academy.codevera.org/sign-up',
  },
  twitter: {
    ...twitterDefaults,
    title: 'Sign Up',
    description:
      'Sign up at Codevera Academy to start your journey in software development. Access a variety of courses, workshops, and supportive resources.',
  },
  robots: 'noindex, nofollow',
};

const RegisterPage = () => {
  return <SignUp />;
};

export default RegisterPage;
