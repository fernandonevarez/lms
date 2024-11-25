import type { Metadata } from 'next';
import {
  openGraphDefaults,
  twitterDefaults,
} from '@/utils/metadata/shared-metedata';

export const metadata: Metadata = {
  metadataBase: new URL('https://academy.codevera.org/sign-in'),
  title: {
    default: 'Authentication | Codevera Academy',
    template: '%s | Authentication | Codevera Academy',
  },
  description:
    'Access a variety of coding courses, hands-on workshops, and supportive community resources at Codevera Academy to boost your software development skills.',
  robots: 'noindex, nofollow',
  openGraph: {
    ...openGraphDefaults,
    title: {
      default: 'Authentication | Codevera Academy',
      template: '%s | Authentication | Codevera Academy',
    },
    description:
      'Unlock coding courses, interactive workshops, and community support at Codevera Academy to help you advance in software development.',
    url: 'https://academy.codevera.org/sign-in',
    images: [
      {
        url: 'https://academy.codevera.org/images/opengraph/auth.webp',
        width: 1200,
        height: 630,
        alt: 'Codevera Academy Authentication - Access Coding Courses',
      },
    ],
  },
  twitter: {
    ...twitterDefaults,
    title: {
      default: 'Authentication | Codevera Academy',
      template: '%s | Authentication | Codevera Academy',
    },
    description:
      'Kickstart your journey in software development with courses, workshops, and community support at Codevera Academy.',
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex justify-center items-center h-screen'>{children}</div>
  );
}
