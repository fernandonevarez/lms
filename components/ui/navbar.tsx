'use client';

// external imports
import { useState } from 'react';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

// local imports
import Banner from './banner';
import { IconLogo, ProjectLogo } from './logos';

// icons
import {
  IconMenu2,
  IconX,
  IconSearch,
  IconFileDescription,
} from '@tabler/icons-react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <header className='flex flex-col shadow-md w-full'>
        <Banner />
        <nav className='flex md:grid md:grid-cols-4 px-6 items-center py-4 w-full h-full max-w-screen-2xl mx-auto bg-white flex-col md:flex-row'>
          <section className='flex w-full flex-row items-center justify-between'>
            <div className='flex flex-row items-center justify-start gap-0 md:gap-1'>
              <IconLogo />
              <div>
                <svg height='32' viewBox='0 0 32 32' width='32'>
                  <path
                    d='M22 5L9 28'
                    stroke='#8c1d40'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  ></path>
                </svg>
              </div>
              <ProjectLogo />
            </div>

            <section className='flex items-center space-x-2'>
              <IconSearch
                stroke={2}
                className='md:hidden'
                onClick={() => setShowSearch(!showSearch)}
              />

              <button
                className='inline-block md:hidden text-2xl text-black focus:outline-none'
                onClick={() => setShowMenu(!showMenu)}
              >
                <IconMenu2
                  className={`${showMenu ? 'hidden' : 'inline-block'}`}
                  size={32}
                  stroke={1}
                />

                <IconX
                  width={32}
                  height={32}
                  stroke={1}
                  className={`${showMenu ? 'inline-block' : 'hidden'}`}
                />
                <span className='sr-only'>
                  {showMenu
                    ? 'Open Mobile Navigation'
                    : 'Close Mobile Navigation'}
                </span>
              </button>
            </section>
          </section>

          <ul
            className={`${
              showMenu ? 'flex' : 'hidden'
            } md:flex md:space-x-6 flex-col md:flex-row w-full justify-start md:justify-start text-md font-medium md:col-span-2 gap-y-4`}
          >
            <li className=''>
              <Link href='/onboarding' onClick={() => setShowMenu(!showMenu)}>
                OnBoarding
              </Link>
            </li>
            <li className=''>
              <Link href='/courses' onClick={() => setShowMenu(!showMenu)}>
                Courses
              </Link>
            </li>
          </ul>

          <ul
            className={`${
              showMenu ? '' : ''
            } hidden md:flex md:justify-end md:gap-x-2 md:items-center`}
          >
            <li>
              {/* Search */}
              <button
                type='button'
                className='w-[237px] cursor-pointer flex items-center justify-between h-8 whitespace-nowrap bg-[hsla(0,0%,95%,1)] rounded-md px-[6px] pl-2 text-sm font-sans text-[hsla(0,0%,56%,1)] transition-all duration-150 ease-linear hover:bg-[hsla(0,0%,92%,1)] hover:text-[hsla(0,0%,49%,1)]'
                onClick={() => setShowSearch(!showSearch)}
              >
                Search Resources...
                <kbd className='h-5 leading-5 rounded-md px-[6px] text-xs text-[hsla(0,0%,9%,1)] bg-white font-medium shadow-[0_0_0_1px_rgba(0,0,0,0.08)] border-none ml-4'>
                  ⌘K
                </kbd>
                <span className='sr-only'>Open Search Dialog</span>
              </button>
            </li>
            <li className='flex items-center'>
              <UserButton />
            </li>
          </ul>
        </nav>
      </header>

      {/* Search Dialog */}
      {/* center it */}
      <div
        className={`fixed bottom-0 w-full h-full bg-[rgba(0,0,0,.4)]  transition-all  duration-[400ms]  ${
          showSearch ? 'flex' : 'hidden'
        }
        
        `}
        onClick={() => setShowSearch(false)}
      ></div>

      <div
        className={`bg-white fixed bottom-0 rounded-t-lg md:rounded-[12px] w-full h-[80vh] md:h-fit md:top z-50 duration-400 md:flex-col
            ${
              showSearch
                ? 'translate-y-0 md:flex'
                : 'translate-y-[80vh] md:hidden'
            } 
            md:top-[30%] md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2
            md:gap-[12px] md:items-center md:justify-between transition-transform md:duration-1000
            md:w-[640px]
            `}
      >
        <section className='flex justify-between px-2 items-center gap-3 w-full'>
          <input
            type='text'
            placeholder='What are you looking for?'
            className='w-full border-b border-gray-300 h-[50px] md:h-[28px] px-2 py-4 rounded mt-2 outline-none'
          />
          <button
            type='button'
            className='h-5 shadow-[0 0 0 1px rgba(0,0,0,.08)] rounded bg-[#fff] text-xs border-none px-1 ml-auto md:flex items-center transition-colors duration-200 cursor-pointer outline-none hidden'
          >
            Esc
          </button>
        </section>
        <section
          aria-label='Suggestions'
          className='p-2 w-full max-h-[436px] overflow-y-auto'
        >
          <ul className='flex flex-col text-sm'>
            <li className='suggestion_item'>
              <IconFileDescription stroke={2} />{' '}
              <Link href='/search?q=nextjs'>Introduction</Link>
            </li>
            <li className='suggestion_item'>
              <IconFileDescription stroke={2} />
              <Link href='/search?q=tailwindcss'>Resume Parser</Link>
            </li>
            <li className='suggestion_item'>
              <IconFileDescription stroke={2} />
              <Link href='/search?q=react'>Career Page</Link>
            </li>
            <li className='suggestion_item'>
              <IconFileDescription stroke={2} />
              <Link href='/search?q=typescript'>Web Development Course</Link>
            </li>
            <li className='suggestion_item'>
              <IconFileDescription stroke={2} />
              <Link href='/search?q=javascript'>Workshops</Link>
            </li>{' '}
            <li className='suggestion_item'>
              <IconFileDescription stroke={2} />
              <Link href='/search?q=javascript'>Code-Along Projects</Link>
            </li>{' '}
            <li className='suggestion_item'>
              <IconFileDescription stroke={2} />
              <Link href='/search?q=javascript'>Suggestion Placeholder</Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default Navbar;
