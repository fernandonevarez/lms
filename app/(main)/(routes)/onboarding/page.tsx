import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    "Onboarding | CodeDevils' Academy | CodeDevils @ Arizona State University",
  description:
    "Get started with CodeDevils' Academy at Arizona State University. Learn how to navigate our platform and join the largest software development community at ASU.",
  keywords: [
    "CodeDevils' Academy onboarding",
    "get started with CodeDevils' Academy",
    'ASU software development community',
    'join CodeDevils Academy',
    'learn coding ASU onboarding',
  ],
  openGraph: {
    title:
      "Onboarding | CodeDevils' Academy | CodeDevils @ Arizona State University",
    description:
      "Join the largest software development community at Arizona State University and start your coding journey today with CodeDevils' Academy.",
    url: 'https://academy.codedevils.io/onboarding',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      "Onboarding | CodeDevils' Academy | CodeDevils @ Arizona State University",
    description:
      "Start your journey with CodeDevils' Academy at Arizona State University and learn coding with our community.",
  },
};

const OnboardingPage = () => {
  return <div>onboarding page</div>;
};

export default OnboardingPage;
