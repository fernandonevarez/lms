import type { Metadata } from 'next';
import {
  openGraphDefaults,
  twitterDefaults,
} from '@/utils/metadata/shared-metadata';

import { Footer } from '@/components/ui/footer';
import { Navbar } from '@/components/ui/navbar';
import { ConsentBanner } from '@/components/ui/consent-banner';

export const metadata: Metadata = {
  title: {
    default: 'Codevera Academy',
    template: '%s | Codevera Academy',
  },
  description:
    'Explore coding courses, interactive workshops, and community resources at Codevera Academy to elevate your software development skills.',
  openGraph: {
    ...openGraphDefaults,
    title: {
      default: 'Codevera Academy',
      template: '%s | Codevera Academy',
    },
    description:
      'Join Codevera Academy to explore a variety of coding courses, interactive workshops, and community resources to elevate your software development skills.',
  },
  twitter: {
    ...twitterDefaults,
    title: {
      default: 'Codevera Academy',
      template: '%s | Codevera Academy',
    },
    description:
      'Discover courses, workshops, and community resources at Codevera Academy to elevate your software development career.',
  },
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>
        {children}
        <ConsentBanner />
      </main>
      <Footer />
    </>
  );
}
