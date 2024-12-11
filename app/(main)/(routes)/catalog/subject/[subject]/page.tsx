import type { Metadata } from 'next';

export const metadata: Metadata = {};

export default async function Page({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const subject = (await params).subject;
  const formattedTitle = subject
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char: string) => char.toUpperCase());

  return (
    <div>
      A catalog page filtered to only show courses about a certain subject
      <div>Subject: {formattedTitle}</div>
    </div>
  );
}
