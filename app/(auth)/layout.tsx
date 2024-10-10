import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default:
      "Login | CodeDevils' Academy | CodeDevils @ Arizona State University",
    template:
      "%s | CodeDevils' Academy | CodeDevils @ Arizona State University",
  },
  description:
    "Access your account at CodeDevils' Academy. Register, log in, and start learning today.",
  robots: 'noindex, nofollow',
  openGraph: {
    title: "Login | CodeDevils' Academy",
    description:
      'Log in or sign up to start learning with CodeDevils at Arizona State University.',
    url: 'https://academy.codedevils.io/sign-in',
  },
};

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex justify-center items-center h-screen'>{children}</div>
  );
}
