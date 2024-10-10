import { SignOutButton } from '@clerk/nextjs';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home | CodeDevils' Academy | CodeDevils @ Arizona State University",
  description:
    "Join CodeDevils' Academy, the largest software development student community at Arizona State University, to learn coding through courses, workshops, and projects.",
  keywords: [
    'CodeDevils Academy',
    'Learn coding Arizona State University',
    'ASU coding courses',
    'CodeDevils',
    'coding workshops',
    'software development ASU',
  ],
  openGraph: {
    title: "Home | CodeDevils' Academy | CodeDevils @ Arizona State University",
    description:
      "Explore a wide range of coding courses and workshops at CodeDevils' Academy, the leading software development community at Arizona State University.",
    url: 'https://academy.codedevils.io',
    images: [
      {
        url: 'https://academy.codedevils.io/og.png',
        width: 1200,
        height: 630,
        alt: 'CodeDevils Academy OpenGraph Image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Home | CodeDevils' Academy | CodeDevils @ Arizona State University",
    description:
      'Join the leading software development student community at Arizona State University and start your coding journey today.',
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
