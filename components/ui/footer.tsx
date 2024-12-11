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
                <ul className='text-sm flex flex-col gap-y-2'>
                  <li>About</li>
                  <li>Careers</li>
                  <li>Affiates</li>
                </ul>
              </li>

              <li className='md:hidden'>
                <h2 className='mb-2 font-medium'>Resources</h2>
                <ul className='text-sm flex flex-col gap-y-2'>
                  <li>Articles</li>
                  <li>Cheetsheets</li>
                  <li>Code Challenges</li>
                  <li>Projects</li>
                </ul>
              </li>
              <li className='md:hidden'>
                <h2 className='mb-2 font-medium'>Support</h2>
                <ul className='text-sm flex flex-col gap-y-2'>
                  <li>Help Center</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className='hidden md:grid md:row-span-7 col-span-6 md:col-span-4'>
            <ul className='flex flex-col gap-y-8'>
              <li>
                <h2 className='mb-2 font-medium'>Resources</h2>
                <ul className='text-sm flex flex-col gap-y-2'>
                  <li>Articles</li>
                  <li>Cheetsheets</li>
                  <li>Code Challenges</li>
                  <li>Projects</li>
                </ul>
              </li>
              <li>
                <h2 className='mb-2 font-medium'>Support</h2>
                <ul className='text-sm flex flex-col gap-y-2'>
                  <li>Help Center</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className='grid col-span-6 md:row-span-7 md:col-span-4'>
            <ul className='grid grid-rows-2'>
              <li>
                <h2 className='mb-2 font-medium'>Community</h2>
                <ul className='text-sm flex flex-col gap-y-2'>
                  <li>Forum</li>
                  <li>Events</li>
                  <li>Projects</li>
                  <li>Leaderboard</li>
                  <li>Blog</li>
                  <li>Learner&apos;s stories</li>
                </ul>
              </li>
              <li className='mt-4 md:hidden'>
                <Logo />
              </li>
            </ul>
          </li>
          <li className='hidden md:grid md:row-span-1 md:col-span-12 items-center'>
            <Logo />
          </li>
        </ul>

        <ul className='grid grid-cols-12 lg:col-span-6 mx-6 py-6 lg:py-0 border-t-2 lg:border-0 lg:border-l-2 lg:pl-12'>
          <li className='grid col-span-6 md:col-span-4'>
            <ul className='flex flex-col gap-y-8'>
              <li>
                <h2 className='mb-2 font-medium'>Subjects</h2>
                <ul className='text-sm flex flex-col gap-y-2'>
                  <li>Computer science</li>
                  <li>Cybersecurity</li>
                  <li>Data analytics</li>
                  <li>Data science</li>
                  <li>Developer tools</li>
                  <li>DevOps</li>
                  <li>IT</li>
                  <li>Web design</li>
                  <li>Web development</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className='grid col-span-6 md:col-span-4'>
            <ul className='flex flex-col gap-y-8'>
              <li>
                <h2 className='mb-2 font-medium'>Languages</h2>
                <ul className='text-sm flex flex-col gap-y-2'>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>HTML & CSS</li>
                  <li>SQL</li>
                  <li>C++</li>
                  <li>C#</li>
                  <li>C</li>
                  <li>PHP</li>
                  <li>R</li>
                  <li>Rust</li>
                </ul>
              </li>
            </ul>
          </li>

          <li className='grid col-span-6 md:col-span-4'>
            <ul className='grid grid-rows-2'>
              <li>
                <h2 className='mb-2 font-medium'>Career building</h2>
                <ul className='text-sm flex flex-col gap-y-2'>
                  <li>Career Path</li>
                  <li>Career Center</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className='mx-auto max-w-screen-2xl'>
        <ul className='mx-6 py-6 border-t-2 lg:mt-6'>
          <li className='flex flex-col md:flex-row justify-between text-xs gap-y-2'>
            <ul className='flex flex-row flex-wrap gap-x-2 justify-center'>
              <li className="after:content-['|'] gap-x-2 flex">
                <p>Privacy Policy</p>
              </li>
              <li className="after:content-['|'] gap-x-2 flex">
                <p>Cookie Policy</p>
              </li>
              <li className="after:content-['|'] gap-x-2 flex">
                <p>Do Not Sell My Personal Information</p>
              </li>
              <li className=''>
                <p>Terms</p>
              </li>
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

export { Footer };
