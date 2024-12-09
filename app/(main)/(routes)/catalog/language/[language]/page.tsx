import type { Metadata } from 'next';

export const metadata: Metadata = {};

export default async function Course({
  params,
}: {
  params: Promise<{ language: string }>;
}) {
  const language = (await params).language;
  const formattedTitle = language
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char: string) => char.toUpperCase());

  return (
    <div>
      A single course page
      <div>Course title: {formattedTitle}</div>
    </div>
  );
}
