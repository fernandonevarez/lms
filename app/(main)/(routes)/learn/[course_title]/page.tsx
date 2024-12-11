import type { Metadata } from 'next';
import {
  openGraphDefaults,
  twitterDefaults,
} from '@/utils/metadata/shared-metadata';

type MetadataProps = {
  params: { course_title: string };
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { course_title: course_title_url } = params;
  const formattedTitle = course_title_url
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char: string) => char.toUpperCase());

  return {
    alternates: {
      canonical: `https://academy.codevera.org/learn/${course_title_url}`,
    },
    keywords: [
      `learn ${formattedTitle} for free`,
      `free ${formattedTitle} course`,
      `interactive ${formattedTitle} lessons`,
      `hands-on ${formattedTitle} projects`,
      `Codevera Academy ${formattedTitle}`,
      `${formattedTitle} programming course`,
      `boost your software development skills with ${formattedTitle}`,
    ],
    title: `${formattedTitle}`,
    description: `Enroll in the ${formattedTitle} course at Codevera Academy to boost your coding skills. Learn and advance your knowledge in ${formattedTitle} through interactive lessons and projects.`,
    openGraph: {
      ...openGraphDefaults,
      title: `${formattedTitle}`,
      description: `Learn ${formattedTitle} at Codevera Academy. Access interactive lessons and hands-on projects to master ${formattedTitle} and advance your software development career.`,
      url: `https://academy.codevera.org/learn/${course_title_url}`,
    },
    twitter: {
      ...twitterDefaults,
      title: `${formattedTitle}`,
      description: `Enroll in the ${formattedTitle} course at Codevera Academy and take your coding skills to the next level. Learn through interactive lessons and community support.`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ course_title: string }>;
}) {
  const course_title = (await params).course_title;
  const formattedTitle = course_title
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char: string) => char.toUpperCase());

  return (
    <div>
      A single course page
      <div>Course title: {formattedTitle}</div>
    </div>
  );
}
