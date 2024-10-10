import type { Metadata } from 'next';
import { SignIn } from '@clerk/nextjs';

export const metadata: Metadata = {
  title:
    "Sign In | CodeDevils' Academy | CodeDevils @ Arizona State University",
  description:
    "Sign in to your CodeDevils' Academy account and continue your coding journey at Arizona State University.",
  robots: 'noindex, nofollow',
  openGraph: {
    title: "Sign In | CodeDevils' Academy",
    description:
      "Access your CodeDevils' Academy account to start learning or continue your coding courses.",
    url: 'https://academy.codedevils.io/sign-in',
  },
  twitter: {
    card: 'summary',
    title:
      "Sign In | CodeDevils' Academy | CodeDevils @ Arizona State University",
    description:
      "Sign in to your CodeDevils' Academy account and continue learning with us.",
  },
};

const LoginPage = () => {
  return <SignIn />;
};

export default LoginPage;
