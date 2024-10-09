// /pages/api/generate-sitemap.ts

import fs from 'fs';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';
import sitemap from '@/app/sitemap'; // Assuming your sitemap function is in the scripts directory.

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const sitemapData = await sitemap();
    const sitemapContent = sitemapData
      .map(
        ({ url, lastModified, changeFrequency, priority }) =>
          `<url><loc>${url}</loc><lastmod>${lastModified}</lastmod><changefreq>${
            changeFrequency ?? 'weekly'
          }</changefreq><priority>${priority ?? 0.5}</priority></url>`
      )
      .join('\n');

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapContent}\n</urlset>`;

    const filePath = path.join(process.cwd(), 'app', 'sitemap.xml');
    await fs.promises.writeFile(filePath, sitemapXml);

    console.log('Sitemap generated successfully!');
    res.status(200).json({ message: 'Sitemap generated successfully' });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).json({ error: 'Error generating sitemap' });
  }
}
