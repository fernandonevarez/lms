import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

import { Logo } from '@/components/ui/logos';

const Footer = () => {
  return (
    <footer className='w-full mt-auto'>
      <div className='mx-auto max-w-screen-2xl lg:grid lg:grid-cols-12'>
        <ul className='grid grid-cols-12 md:grid-rows-8 lg:col-span-6 mx-6 py-6 lg:py-0'>
          <li className='grid col-span-6 md:row-span-7 md:col-span-4'>
            <ul className='flex flex-col  gap-y-8'>
              <li>
                <h2 className='mb-2 font-medium'>Company</h2>
                <ul className=' flex flex-col gap-y-2'>
                  <NavigationLink
                    href='https://www.codevera.org/about'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    About
                  </NavigationLink>
                  <NavigationLink
                    href='https://www.codevera.org/careers'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Careers
                  </NavigationLink>
                  <NavigationLink
                    href='https://www.codevera.org/affiates'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Affiates
                  </NavigationLink>
                </ul>
              </li>

              <li className='md:hidden'>
                <h2 className='mb-2 font-medium'>Resources</h2>
                <ul className='text-sm flex flex-col gap-y-2'>
                  <NavigationLink href='/articles'>Articles</NavigationLink>
                  <NavigationLink href='/cheatsheets'>
                    Cheatsheets
                  </NavigationLink>
                  <NavigationLink href='/code-challenges'>
                    Code Challenges
                  </NavigationLink>
                  <NavigationLink href='/projects'>Projects</NavigationLink>
                </ul>
              </li>
              <li className='md:hidden'>
                <h2 className='mb-2 font-medium'>Support</h2>
                <ul className='text-sm flex flex-col gap-y-2'>
                  <NavigationLink
                    href='https://www.codevera.org/support'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Help Center
                  </NavigationLink>
                </ul>
              </li>
            </ul>
          </li>
          <li className='hidden md:grid md:row-span-7 col-span-6 md:col-span-4'>
            <ul className='flex flex-col gap-y-8'>
              <li>
                <h2 className='mb-2 font-medium'>Resources</h2>
                <ul className='text-sm flex flex-col gap-y-2'>
                  <NavigationLink href='/articles'>Articles</NavigationLink>
                  <NavigationLink href='/cheatsheets'>
                    Cheatsheets
                  </NavigationLink>
                  <NavigationLink href='/code-challenges'>
                    Code Challenges
                  </NavigationLink>
                  <NavigationLink href='/projects'>Projects</NavigationLink>
                </ul>
              </li>
              <li>
                <h2 className='mb-2 font-medium'>Support</h2>
                <ul className='text-sm flex flex-col gap-y-2'>
                  <NavigationLink
                    href='https://www.codevera.org/support'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Help Center
                  </NavigationLink>
                </ul>
              </li>
            </ul>
          </li>
          <li className='grid col-span-6 md:row-span-7 md:col-span-4'>
            <ul className='grid grid-rows-2'>
              <li>
                <h2 className='mb-2 font-medium'>Community</h2>
                <ul className='text-sm flex flex-col gap-y-2'>
                  <NavigationLink href='/community/forum'>Forum</NavigationLink>
                  <NavigationLink href='/community/events'>
                    Events
                  </NavigationLink>
                  <NavigationLink href='/community/projects'>
                    Projects
                  </NavigationLink>
                  <NavigationLink href='/community/leaderboard'>
                    Leaderboard
                  </NavigationLink>
                  <NavigationLink
                    href='https://www.codevera.org/blog'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Blog
                  </NavigationLink>
                  <NavigationLink
                    href='https://www.codevera.org/blog/category/learner-stories'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Learner&apos;s stories
                  </NavigationLink>
                </ul>
              </li>
              <li className='mt-4 md:hidden'>
                <Link href='/' className='w-fit'>
                  <Logo />
                </Link>
              </li>
            </ul>
          </li>
          <li className='hidden md:grid md:row-span-1 md:col-span-12 items-center'>
            <Link href='/' className='w-fit'>
              <Logo />
            </Link>
          </li>
        </ul>

        <ul className='grid grid-cols-12 lg:col-span-6 mx-6 py-6 lg:py-0 border-t-2 lg:border-0 lg:border-l-2 lg:pl-12'>
          <li className='grid col-span-6 md:col-span-4'>
            <ul className='flex flex-col gap-y-8'>
              <li>
                <h2 className='mb-2 font-medium'>Subjects</h2>
                <ul className='text-sm flex flex-col gap-y-2'>
                  <NavigationLink href='/catalog/subjects/computer-science'>
                    Computer science
                  </NavigationLink>
                  <NavigationLink href='/catalog/subject/cybersecurity'>
                    Cybersecurity
                  </NavigationLink>
                  <NavigationLink href='/catalog/subject/data-analytics'>
                    Data analytics
                  </NavigationLink>
                  <NavigationLink href='/catalog/subject/data-science'>
                    Data science
                  </NavigationLink>
                  <NavigationLink href='/catalog/subject/developer-tools'>
                    Developer tools
                  </NavigationLink>
                  <NavigationLink href='/catalog/subject/devops'>
                    DevOps
                  </NavigationLink>
                  <NavigationLink href='/catalog/subject/it'>IT</NavigationLink>
                  <NavigationLink href='/catalog/subject/web-design'>
                    Web design
                  </NavigationLink>
                  <NavigationLink href='/catalog/subject/web-development'>
                    Web development
                  </NavigationLink>
                </ul>
              </li>
            </ul>
          </li>
          <li className='grid col-span-6 md:col-span-4'>
            <ul className='flex flex-col gap-y-8'>
              <li>
                <h2 className='mb-2 font-medium'>Languages</h2>
                <ul className='text-sm flex flex-col gap-y-2'>
                  <NavigationLink href='/catalog/language/python'>
                    Python
                  </NavigationLink>
                  <NavigationLink href='/catalog/language/'>
                    JavaScript
                  </NavigationLink>
                  <NavigationLink href='/catalog/language/'>
                    HTML & CSS
                  </NavigationLink>
                  <NavigationLink href='/catalog/language/sql'>
                    SQL
                  </NavigationLink>
                  <NavigationLink href='/catalog/language/cpp'>
                    C++
                  </NavigationLink>
                  <NavigationLink href='/catalog/language/csharp'>
                    C#
                  </NavigationLink>
                  <NavigationLink href='/catalog/language/c'>C</NavigationLink>
                  <NavigationLink href='/catalog/language/php'>
                    PHP
                  </NavigationLink>
                  <NavigationLink href='/catalog/language/r'>R</NavigationLink>
                  <NavigationLink href='/catalog/language/rust'>
                    Rust
                  </NavigationLink>
                </ul>
              </li>
            </ul>
          </li>

          <li className='grid col-span-6 md:col-span-4'>
            {/* <ul className=''>
              <li> */}
            <div>
              <h2 className='mb-2 font-medium'>Career building</h2>
              <ul className='text-sm flex flex-col gap-y-2'>
                <NavigationLink href='/career-paths'>
                  Career Path
                </NavigationLink>
                <NavigationLink href='/career-center'>
                  Career Center
                </NavigationLink>
              </ul>
            </div>

            {/* </li>
            </ul> */}
          </li>
        </ul>
      </div>

      <div className='mx-auto max-w-screen-2xl'>
        <ul className='mx-6 py-6 border-t-2 lg:mt-6'>
          <li className='flex flex-col md:flex-row justify-between text-xs gap-y-2'>
            <ul className='flex flex-row flex-wrap gap-x-2 justify-center'>
              <NavigationLink
                href='https://www.codevera.org/policy'
                target='_blank'
                rel='noopener noreferrer'
                className="after:content-['|'] gap-x-2 flex"
              >
                Privacy Policy
              </NavigationLink>
              <NavigationLink
                href='https://www.codevera.org/cookie-policy'
                target='_blank'
                rel='noopener noreferrer'
                className="after:content-['|'] gap-x-2 flex"
              >
                Cookie Policy
              </NavigationLink>
              <NavigationLink
                href='https://www.codevera.org/privacy'
                target='_blank'
                rel='noopener noreferrer'
                className="after:content-['|'] gap-x-2 flex"
              >
                Do Not Sell My Personal Information
              </NavigationLink>
              <NavigationLink
                href='https://www.codevera.org/terms'
                target='_blank'
                rel='noopener noreferrer'
              >
                Terms
              </NavigationLink>
            </ul>
            <p className='text-center'>
              Made with ❤️ in AZ, USA &copy; {new Date().getFullYear()} Codevera
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

const NavigationLink = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          'text-sm hover:text-primary transition-colors',
          className
        )}
        {...props}
      />
    </li>
  );
});

NavigationLink.displayName = 'NavigationLink';

export { Footer };
