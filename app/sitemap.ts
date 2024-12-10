/*

  This file as of right now sucks and the reason for that is because i still need to finish the backend and actually content creation aspsect of the project. Once that is done, i will be able to actually create a sitemap for the website the way it is supposed to be.

  In the meantime, i won't work much more on this file.

*/

import type { MetadataRoute } from 'next';

// Example function to dynamically get courses from an API or database
async function getCoursesURL() {
  try {
    // Use environment variable for the API endpoint
    const apiUrl =
      process.env.COURSES_API_URL ||
      'https://apis.codevera.org/.../.../.../courses';
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Failed to fetch courses');
    const courses = await response.json();
    return courses.map(
      (course: {
        course_id: string;
        title: string;
        last_modified: string;
      }) => ({
        courseId: course.course_id,
        title: course.title,
        lastModified: course.last_modified,
      })
    );
  } catch (error) {
    console.error('Error fetching courses:', error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const courses = await getCoursesURL();
  const currentDate = new Date().toISOString();

  const courseUrls = courses.map(
    (course: { course_id: string; title: string; lastModified: string }) => ({
      url: `https://academy.codevera.org/learn/${course.course_id}`,
      lastModified: course.lastModified || currentDate,
      priority: 0.5,
    })
  );

  /*
    TODO:
    - get all the articles' URLs from the API
    - update the path priority to prioritize resources and community pages over other pages
    - add the career paths' URLs
    - add the cheatsheets' URLs
    - add the code challenges' URLs
    - update the courses' URLs to once the backend is ready
  */

  const staticUrls = [
    {
      url: 'https://academy.codevera.org/',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    ...[
      '/learn',
      '/catalog',
      '/articles',
      '/career-center',
      '/community/events',
      '/community/forum',
      '/community/leaderboard',
      '/community/projects',
      '/cheatsheets',
      '/code-challenges',
      '/projects',
      '/sign-in',
      '/sign-up',
    ].map((path) => ({
      url: `https://academy.codevera.org${path}`,
      lastModified: currentDate,
      priority: 0.5,
    })),
  ];

  return [...staticUrls, ...courseUrls];
}
