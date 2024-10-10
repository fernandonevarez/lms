import type { Metadata } from 'next';
import { SignUp } from '@clerk/nextjs';

export const metadata: Metadata = {
  title:
    "Sign Up | CodeDevils' Academy | CodeDevils @ Arizona State University",
  description:
    "Create your CodeDevils' Academy account and begin your coding journey with Arizona State University.",
  robots: 'noindex, nofollow',
  openGraph: {
    title: "Sign Up | CodeDevils' Academy",
    description:
      "Join CodeDevils' Academy to learn coding, participate in workshops, and enhance your development skills.",
    url: 'https://academy.codedevils.io/sign-up',
  },
  twitter: {
    card: 'summary',
    title:
      "Sign Up | CodeDevils' Academy | CodeDevils @ Arizona State University",
    description:
      "Sign up to start learning with CodeDevils' Academy, Arizona State University.",
  },
};

const RegisterPage = () => {
  return <SignUp />;
};

export default RegisterPage;
