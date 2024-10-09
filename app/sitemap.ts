import type { MetadataRoute } from 'next';

// Example function to dynamically get courses from an API or database
async function getCoursesURL() {
  try {
    // Use environment variable for the API endpoint
    const apiUrl =
      process.env.COURSES_API_URL ||
      'https://academy.codedevils.org/api/courses';
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('Failed to fetch courses');
    const courses = await response.json();
    return courses.map(
      (course: { courseId: string; title: string; lastModified: string }) => ({
        courseId: course.courseId,
        title: course.title,
        lastModified: course.lastModified,
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
    (course: { courseId: string; title: string; lastModified: string }) => ({
      url: `https://academy.codedevils.org/courses/${course.courseId}`,
      lastModified: course.lastModified || currentDate,
      priority: 0.5,
    })
  );

  const staticUrls = [
    {
      url: 'https://academy.codedevils.org/',
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1,
    },
    ...[
      '/onboarding',
      '/courses',
      '/career',
      '/workshops',
      '/projects',
      '/sign-in',
      '/sign-up',
    ].map((path) => ({
      url: `https://academy.codedevils.org${path}`,
      lastModified: currentDate,
      priority: path.includes('/courses') ? 0.8 : 0.5,
    })),
  ];

  return [...staticUrls, ...courseUrls];
}
