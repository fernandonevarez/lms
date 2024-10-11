import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useUserRole } from '@/lib/utils';

const Banner = () => {
  const userRole = useUserRole();
  const pathname = usePathname();

  const role = userRole?.split(':')[1];
  // const role = 'student'; // for testing
  const adminList = ['admin', 'super_user', 'instructor'];

  return (
    <div className={'block w-full bg-gray shadow-sm'}>
      <div className='mx-auto max-w-screen-2xl py-2'>
        <ul
          className={`flex  ${
            adminList?.includes(`${role}`) ? 'justify-end' : 'justify-start'
          } gap-4 text-maroon md:justify-end`}
        >
          {adminList?.includes(`${role}`) ? (
            <>
              {pathname === '/dashboard/instructor' ? (
                <li>
                  <Link
                    href='/courses'
                    className='bg-maroon text-white p-2 rounded uppercase md:hover:bg-maroon/80  transition-colors duration-300 text-xs'
                  >
                    Exit Instructor Mode
                  </Link>
                </li>
              ) : (
                <li>
                  <Link
                    href='/dashboard/instructor'
                    className='bg-maroon text-white p-2 rounded uppercase md:hover:bg-maroon/80  transition-colors duration-300 text-xs'
                  >
                    Instructor Mode
                  </Link>
                </li>
              )}
            </>
          ) : (
            <>
              <li>
                <Link href='/career-services' className='hover:underline'>
                  Career Services
                </Link>
              </li>
              <li>
                <Link
                  href='https://www.codedevils.org/support'
                  className='hover:underline'
                >
                  Get Support
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Banner;
