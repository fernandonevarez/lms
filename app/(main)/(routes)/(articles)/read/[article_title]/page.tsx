import type { Metadata } from 'next';
import {
  openGraphDefaults,
  twitterDefaults,
} from '@/utils/metadata/shared-metadata';

export async function generateMetadata({
  params,
}: {
  params: { article_title: string };
}): Promise<Metadata> {
  const { article_title: articleTitleUrl } = params;
  const formattedTitle = articleTitleUrl
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char: string) => char.toUpperCase());

  return {
    keywords: [
      `${formattedTitle} article`,
      `learn ${formattedTitle}`,
      `${formattedTitle} tutorial`,
      'Codevera Academy articles',
      'software development insights',
      'coding best practices',
      'in-depth coding tutorials',
    ],
    alternates: {
      canonical: `https://academy.codevera.org/read/${articleTitleUrl}`,
    },
    title: `${formattedTitle}`,
    description: `Read in-depth information about ${formattedTitle} at Codevera Academy. Expand your understanding of software development with detailed tutorials and insights on ${formattedTitle}.`,
    openGraph: {
      ...openGraphDefaults,
      title: `${formattedTitle}`,
      description: `Learn more about ${formattedTitle} at Codevera Academy. Access in-depth articles to gain insights and expand your software development skills.`,
      url: `https://academy.codevera.org/read/${articleTitleUrl}`,
    },
    twitter: {
      ...twitterDefaults,
      title: `${formattedTitle}`,
      description: `Explore ${formattedTitle} at Codevera Academy. Gain in-depth insights and improve your software development knowledge today.`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ article_title: string }>;
}) {
  const article_title = (await params).article_title;
  const formattedTitle = article_title
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char: string) => char.toUpperCase());

  return (
    <div>
      A single article page
      <div>Article title: {formattedTitle}</div>
    </div>
  );
}
