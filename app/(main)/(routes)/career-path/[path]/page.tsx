import type { Metadata } from 'next';

export const metadata: Metadata = {};

export default async function CareerPath({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const path = (await params).path;
  const formattedTitle = path
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (char: string) => char.toUpperCase());

  return (
    <div>
      Career path page
      <div>Current Career path: {formattedTitle}</div>
    </div>
  );
}
