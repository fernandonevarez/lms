import type { Metadata } from 'next';
import {
  openGraphDefaults,
  twitterDefaults,
} from '@/utils/metadata/shared-metadata';
import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://academy.codevera.org'),
  title: {
    default: 'Codevera Academy',
    template: '%s | Codevera Academy',
  },
  description:
    'Codevera Academy offers a wide range of coding courses, workshops, and articles to help software enthusiasts improve their skills and advance their careers.',
  robots:
    process.env.DEPLOYMENT_ENV === 'production'
      ? 'index, follow'
      : 'noindex, nofollow',
  authors: [
    { name: 'Codevera Team', url: 'https://academy.codevera.org/about' },
  ],
  applicationName: 'Codevera Academy',
  creator: 'Codevera Academy Team',
  manifest: '/manifest.webmanifest',
  keywords: [
    'Codevera Academy',
    'Learn to Code',
    'Online Coding Courses',
    'Software Development Learning',
    'Career Readiness for Developers',
    'Programming Workshops',
    'Coding Skills Improvement',
    'Software Development',
    'Web Development',
    'Code-Along Projects',
  ],
  openGraph: {
    ...openGraphDefaults,
    title: 'Codevera Academy',
    description:
      'Explore a wide range of coding courses, workshops, and resources at Codevera Academy to enhance your coding skills and advance your software development career.',
    url: 'https://academy.codevera.org',
    type: 'website',
    locale: openGraphDefaults.locale,
    siteName: openGraphDefaults.siteName,
    images: [
      {
        url: 'https://academy.codevera.org/images/opengraph/default.webp',
        width: 1200,
        height: 630,
        alt: 'Codevera Academy - Coding Courses and Career Growth',
      },
    ],
  },
  twitter: {
    ...twitterDefaults,
    title: 'Codevera Academy',
    description:
      'Join Codevera Academy to learn coding skills through online courses, workshops, and community support. Advance your career in software development today.',
  },
  appleWebApp: {
    title: 'Codevera Academy',
    startupImage: 'https://academy.codevera.org/icons/apple-touch-icon.png',
    statusBarStyle: 'black-translucent',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body
          className={`antialiased flex h-screen flex-col ${inter.className}`}
        > 
          <GoogleTagManager gtmId={`${process.env.GTM_ID}`} />
          {children}
          <GoogleAnalytics gaId={`${process.env.GA_MEASUREMENT_ID}`} />
        </body>
      </html>
    </ClerkProvider>
  );
}
