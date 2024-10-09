import type { Metadata } from 'next';

type MetadataProps = {
  params: { courseTitle: string; courseId: string };
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const courseTitle = params.courseTitle;
  const courseDescription = `Learn ${courseTitle} with CodeDevils' Academy, part of CodeDevils at Arizona State University. Improve your coding skills through hands-on lessons, projects, and real-world applications.`;

  return {
    title: `${courseTitle} | CodeDevils' Academy | CodeDevils @ Arizona State University`,
    description: courseDescription,
    keywords: [
      `${courseTitle}`,
      'CodeDevils Academy',
      'Learn coding',
      `${courseTitle} ASU`,
      'ASU coding courses',
      'CodeDevils courses',
      'software development ASU',
    ],
    openGraph: {
      title: `${courseTitle} | CodeDevils' Academy | CodeDevils @ Arizona State University`,
      description: courseDescription,
      url: `https://academy.codedevils.org/courses/${params.courseId}`,
      siteName: "CodeDevils' Academy",
      images: [
        {
          url: `https://academy.codedevils.org/courses/${params.courseId}/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${courseTitle} Course Image`,
        },
      ],
    },
    twitter: {
      title: `${courseTitle} | CodeDevils' Academy | CodeDevils @ Arizona State University`,
      description: courseDescription,
      card: 'summary_large_image',
      images: [
        `https://academy.codedevils.org/courses/${params.courseId}/twitter-image.png`,
      ],
    },
  };
}

const CoursePage = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      A single course page
      <div>{params.slug}</div>
    </div>
  );
};

export default CoursePage;
