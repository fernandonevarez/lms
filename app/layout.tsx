import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://academy.codedevils.io'),
  title: "CodeDevils' Academy | CodeDevils @ Arizona State University",
  description:
    "Explore a wide range of coding courses designed for beginners to advanced learners at CodeDevils' Academy, part of Arizona State University.",
  robots: 'index, follow',
  authors: [
    { name: 'Fernando David Nevarez', url: 'https://www.davidnevarez.info' },
  ],
  applicationName: "CodeDevils' Academy",
  viewport: 'width=device-width, initial-scale=1.0',
  creator: 'Fernando David Nevarez',
  manifest: '/manifest.webmanifest',
  keywords: [
    'CodeDevils Arizona State University',
    'Arizona State University coding courses',
    'Coding Courses for Beginners to Advanced',
    'learn to coding for beginners',
    'Programming Workshops at ASU',
    'career readiness for software developers',
    'Software Development',
    'Web Development',
    'Programming Skills',
    'Code-Along Projects',
  ],
  openGraph: {
    title: "CodeDevils' Academy | CodeDevils @ Arizona State University",
    description:
      "Explore a wide range of coding courses designed for beginners to advanced learners at CodeDevils' Academy, part of Arizona State University.",
    type: 'website',
    url: 'https://academy.codedevils.io',
    locale: 'en_US',
    siteName: "CodeDevils' Academy",
    images: [
      {
        url: 'https://www.codedevils.io/og.png',
        width: 1362,
        height: 482,
        alt: "CodeDevils' openGraph image",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "CodeDevils' Academy | CodeDevils @ Arizona State University",
    description:
      "Explore a wide range of coding courses designed for beginners to advanced learners at CodeDevils' Academy, part of Arizona State University.",
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
        <body className={`antialiased flex h-screen flex-col `}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
