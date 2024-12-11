import type { Metadata } from 'next';

export const metadata: Metadata = {};

export default async function Page({
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
      A catalog page filtered to only show courses about a certain language
      <div>Language: {formattedTitle}</div>
    </div>
  );
}
