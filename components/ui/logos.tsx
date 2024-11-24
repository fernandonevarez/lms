import Link from 'next/link';
import Image from 'next/image';

const IconLogo = () => {
  return (
    <Link href='https://www.codevera.org/'>
      <Image
        src='/logos/logo-small.svg'
        alt='logo'
        width={16}
        height={16}
        className='w-8 md:w-8'
        aria-label="Go to Codevera's home page"
      />
      <span className='sr-only'>Go to Codevera&apos;s home page</span>
    </Link>
  );
};

const ProjectLogo = () => {
  return (
    <Link href='/'>
      <Image
        src='/logos/logo-large.svg'
        alt='logo'
        width={64}
        height={32}
        className='w-36 md:w-32 items-center flex'
        aria-label='Go to Home Page'
      />
      <span className='sr-only'>Go to Home Page</span>
    </Link>
  );
};

export { IconLogo, ProjectLogo };
