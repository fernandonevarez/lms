import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('https://academy.codedevils.org'),
  title: {
    template:
      "%s | CodeDevils' Academy | CodeDevils @ Arizona State University",
    default: "CodeDevils' Academy | CodeDevils @ Arizona State University",
  },
  description:
    "Explore a wide range of coding courses designed for beginners to advanced learners at CodeDevils' Academy, part of Arizona State University.",

  openGraph: {
    title: "CodeDevils' Academy | CodeDevils @ Arizona State University",
    description:
      "Explore a wide range of coding courses designed for beginners to advanced learners at CodeDevils' Academy, part of Arizona State University.",
    type: 'website',
    url: 'https://academy.codedevils.org',
    locale: 'en_US',
    siteName: "CodeDevils' Academy",
    images: [
      {
        url: 'https://www.codedevils.org/og.png',
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

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
