import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Btye size Academy',
  description: 'Learn to code with Byte Size Academy',
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className='mx-auto w-full max-w-screen-2xl'>{children}</main>
      <Footer />
    </>
  );
}
