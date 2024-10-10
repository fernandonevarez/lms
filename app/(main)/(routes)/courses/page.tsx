import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    "Courses | CodeDevils' Academy | CodeDevils @ Arizona State University",
  description:
    "Explore beginner to advanced coding courses offered at CodeDevils' Academy. Learn web development, programming fundamentals, and more with CodeDevils at Arizona State University.",
  keywords: [
    'coding courses',
    'learn coding ASU',
    'Arizona State University coding classes',
    'web development course',
    'programming fundamentals',
    'CodeDevils Academy courses',
  ],
  openGraph: {
    title:
      "Courses | CodeDevils' Academy | CodeDevils @ Arizona State University",
    description:
      "Browse our wide range of coding courses at CodeDevils' Academy, from beginner programming to advanced development topics.",
    url: 'https://academy.codedevils.io/courses',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Courses | CodeDevils' Academy | CodeDevils @ Arizona State University",
    description:
      "Learn coding at Arizona State University with our beginner to advanced courses at CodeDevils' Academy.",
  },
};

const CoursesPage = () => {
  return <div>Courses Page</div>;
};

export default CoursesPage;
