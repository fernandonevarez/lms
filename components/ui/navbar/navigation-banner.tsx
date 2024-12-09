import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useUserRole } from '@/lib/utils';

import { Button } from '@/components/ui/button';

const Banner = () => {
  const userRole = useUserRole();
  const pathname = usePathname();

  const role = userRole?.split(':')[1];
  const adminList = ['admin', 'super_user', 'instructor'];

  return (
    <div className={'block w-full bg-muted shadow-sm'}>
      <div className='mx-auto max-w-screen-2xl py-2 px-6'>
        <ul
          className={`flex  ${
            adminList?.includes(`${role}`) ? 'justify-end' : 'justify-start'
          } gap-4 text-white md:justify-end`}
        >
          {adminList?.includes(`${role}`) ? (
            <>
              {pathname === '/dashboard/instructor' ? (
                <li>
                  <Button variant={'action'} size={'sm'}>
                    <Link href='/catalog' className='uppercase'>
                      Exit Instructor Mode
                    </Link>
                  </Button>
                </li>
              ) : (
                <li>
                  <Button variant={'action'} size={'sm'}>
                    <Link href='/dashboard/instructor' className='uppercase'>
                      Instructor Mode
                    </Link>
                  </Button>
                </li>
              )}
            </>
          ) : (
            <>
              <li>
                <Link href='/career-center' className='*:p-0'>
                  <Button variant={'link'}>Career Services</Button>
                </Link>
              </li>
              <li>
                <Link href='https://www.codevera.org/support' className='*:p-0'>
                  <Button variant={'link'}>Get Support </Button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export { Banner };
