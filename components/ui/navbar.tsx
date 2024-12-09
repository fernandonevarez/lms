'use client';

import * as React from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Banner } from '@/components/ui/navbar/navigation-banner';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuBanner,
  NavigationMenuBannerTitle,
  NavigationMenuBannerDescription,
  NavigationMenuLink,
  NavigationMenuList,
  ListItem,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuLogo,
} from '@/components/ui/navbar/navigation-menu';
import { Searchbar } from '@/components/ui/navbar/navigation-search';
import { ScrollArea } from '@/components/ui/scroll-area';

import {
  Menu,
  SquareLibrary,
  ArrowRight,
  Layers3,
  Library,
  Handshake,
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className='bg-white shadow-md'>
      <Banner />
      <NavigationMenu className='lg:gap-2'>
        <NavigationMenuLogo />

        {/* Desktop Navigation */}
        <div className='hidden lg:flex md:items-center grow justify-between'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Catalog</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='grid gap-2 p-4 md:w-[400px] lg:w-[1000px] lg:grid-rows-8 lg:grid-cols-10 lg:h-[500px]'>
                  <div className='col-span-3 row-span-5'>
                    <NavigationMenuBanner>
                      <NavigationMenuBannerTitle>
                        Popluar Course Topics
                      </NavigationMenuBannerTitle>
                      <NavigationMenuBannerDescription>
                        Explore all of our free courses in topics that intrest
                        you.
                      </NavigationMenuBannerDescription>
                      <Button variant={'action'} className='mt-auto ' size='lg'>
                        <Link href='/catalog'>Explore all courses</Link>
                      </Button>
                    </NavigationMenuBanner>
                  </div>

                  <ul className='grid grid-cols-4 grid-flow-col grid-rows-6 col-span-7 row-span-4 '>
                    <ListItem href='/catalog/language/python' title='Python' />
                    <ListItem
                      href='/catalog/language/javascript'
                      title='JavaScript'
                    />
                    <ListItem
                      href='/catalog/language/html-css'
                      title='HTML & CSS'
                    />
                    <ListItem href='/catalog/language/sql' title='SQL' />
                    <ListItem href='/catalog/language/java' title='Java' />
                    <ListItem href='/catalog/language/cpp' title='C++' />
                    <ListItem href='/catalog/language/csharp' title='C#' />
                    <ListItem href='/catalog/language/c' title='C' />
                    <ListItem href='/catalog/language/php' title='PHP' />
                    <ListItem href='/catalog/language/r' title='R' />
                    <ListItem href='/catalog/language/rust' title='Rust' />
                  </ul>

                  <div className='grid row-span-2 col-span-3 '>
                    <NavigationMenuBanner>
                      <NavigationMenuBannerTitle>
                        Choose your path
                      </NavigationMenuBannerTitle>
                      <NavigationMenuBannerDescription>
                        Explore all of our career paths and find the one that is
                        right for you.
                      </NavigationMenuBannerDescription>
                    </NavigationMenuBanner>
                  </div>

                  <div className='grid row-start-5 col-start-4 col-span-8 bg-muted justify-items-center items-center rounded-md'>
                    Prepare for your future with newly launched resources.
                  </div>

                  <ul className='grid grid-flow-row-dense	grid-rows-3 grid-cols-3 row-span-2 col-span-7'>
                    <ListItem
                      href='/career-path/full-stack-engineer'
                      title='Full-Stack Engineer'
                    />
                    <ListItem
                      href='/career-path/front-end-engineer'
                      title='Front End Engineer'
                    />
                    <ListItem
                      href='/career-path/back-end-engineer'
                      title='Back End Engineer'
                    />
                    <ListItem
                      href='/career-path/computer-science'
                      title='Computer Science'
                    />
                    <ListItem
                      href='/career-path/data-scientist'
                      title='Data Scientist'
                    />
                    <ListItem
                      href='/career-path/cybersecurity'
                      title='Cybersecurity'
                    />
                  </ul>

                  <div className='grid col-span-12 row-span-2 bg-muted justify-items-start items-center px-6'>
                    <div className='flex flex-row gap-x-2 items-center'>
                      <Layers3 className='text-primary' />
                      <p className='flex flex-row'>
                        Don&apos;t know where to start?
                      </p>
                      <Link
                        href='/career-paths'
                        className='text-primary text-sm font-bold gap-1 flex items-center hover:underline'
                      >
                        Take our quiz
                        <ArrowRight height={'12px'} width={'12px'} />
                      </Link>
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='grid p-4 gap-2 lg:grid-rows-5 lg:grid-cols-10 md:w-[400px] lg:w-[800px] lg:h-[400px]'>
                  <div className='row-span-3 col-span-3 '>
                    <NavigationMenuBanner>
                      <NavigationMenuBannerTitle>
                        Learning & practice tools
                      </NavigationMenuBannerTitle>
                      <NavigationMenuBannerDescription>
                        Explore al of our free tools to help you learn and
                        practice.
                      </NavigationMenuBannerDescription>
                    </NavigationMenuBanner>
                  </div>
                  <ul className='grid grid-cols-3 grid-rows-2 row-span-3 col-span-7'>
                    <ListItem href='/articles' title='Articles'>
                      Learn more about in-depth technical topics.
                    </ListItem>
                    <ListItem href='/cheatsheets' title='Cheatsheets'>
                      Quick reference guides for our courses.
                    </ListItem>
                    <ListItem href='/code-challenges' title='Code Challenges'>
                      Practice your skills with code challenges.
                    </ListItem>
                    <ListItem href='/projects' title='Projects'>
                      Follow along with our guided projects.
                    </ListItem>
                  </ul>
                  <div className='row-span-2 col-span-3'>
                    <NavigationMenuBanner>
                      <NavigationMenuBannerTitle>
                        Inspiration & career
                      </NavigationMenuBannerTitle>
                      <NavigationMenuBannerDescription>
                        Get inspired and explore career resources.
                      </NavigationMenuBannerDescription>
                    </NavigationMenuBanner>
                  </div>

                  <ul className='grid grid-cols-3 grid-rows-1 row-span-2 col-span-7'>
                    <ListItem
                      href='https://www.codevera.org/blog/category/career'
                      externalLink
                      title='Career'
                    >
                      Find career advice and resources.
                    </ListItem>
                    <ListItem
                      href='https://www.codevera.org/blog/category/inspiration'
                      externalLink
                      title='Inspiration'
                    >
                      Find inspiration for your coding journey.
                    </ListItem>
                    <ListItem
                      href='/career-center/job-readiness'
                      title='Job-readiness checker'
                    >
                      Assess your job readiness with AI.
                    </ListItem>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Community</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className='grid p-4 gap-2 lg:grid-rows-3 lg:grid-cols-10 md:w-[400px] lg:w-[800px] lg:h-[300px]'>
                  <div className='row-span-3 col-span-3 '>
                    <NavigationMenuBanner>
                      <NavigationMenuBannerTitle>
                        Explore our community
                      </NavigationMenuBannerTitle>
                      <NavigationMenuBannerDescription>
                        Join events, ask questions, and meet other learners
                        through our community projects.
                      </NavigationMenuBannerDescription>
                    </NavigationMenuBanner>
                  </div>
                  <ul className='grid grid-cols-3 grid-rows-2 row-span-3 col-span-7'>
                    <ListItem href='/community/forum' title='Forum'>
                      Join discussions and ask questions.
                    </ListItem>
                    <ListItem href='/community/events' title='Events'>
                      Join community events and meetups.
                    </ListItem>
                    <ListItem href='/community/projects' title='Projects'>
                      Get industry-like experience through community projects.
                    </ListItem>
                    <ListItem
                      href='https://www.codevera.org/blog'
                      externalLink
                      title='Blog'
                    >
                      Stay up-to-date with our blog.
                    </ListItem>
                    <ListItem href='/community/leaderboard' title='Leaderboard'>
                      See how you stack up against others.
                    </ListItem>
                    <ListItem
                      title="Learner's Stories"
                      href='https://www.codevera.org/blog/category/learner-stories'
                      externalLink
                    >
                      Read about other learners&apos; experiences.
                    </ListItem>
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <Link href='/career-center' legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Career Center
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>

          <section className='flex gap-2 grow-0 items-center'>
            <div className='relative'>
              <Searchbar />
            </div>
            <UserButton />
          </section>
        </div>

        {/* Mobile Navigation */}
        <div className='flex lg:hidden items-center space-x-2'>
          <Searchbar />

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button size='icon'>
                <span className='sr-only'>Open menu</span>
                <Menu className='h-6 w-6 text-black' aria-hidden='true' />
              </Button>
            </SheetTrigger>

            <SheetContent side='left' className='w-full lg:hidden'>
              <ScrollArea className='h-full odd:bg-muted'>
                <Collapsible>
                  <CollapsibleTrigger>
                    <SquareLibrary />
                    Catalog
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className='space-y-2'>
                      <NavigationMenuBanner>
                        <NavigationMenuBannerTitle>
                          Popluar Course Topics
                        </NavigationMenuBannerTitle>
                        <NavigationMenuBannerDescription>
                          Explore all of our free courses in topics that intrest
                          you.
                        </NavigationMenuBannerDescription>
                      </NavigationMenuBanner>

                      <ListItem
                        href='/catalog/language/python'
                        title='Python'
                      />
                      <ListItem
                        href='/catalog/language/javascript'
                        title='JavaScript'
                      />
                      <ListItem
                        href='/catalog/language/html-css'
                        title='HTML & CSS'
                      />
                      <ListItem href='/catalog/language/sql' title='SQL' />
                      <ListItem href='/catalog/language/java' title='Java' />
                      <ListItem href='/catalog/language/cpp' title='C++' />
                      <ListItem href='/catalog/language/csharp' title='C#' />
                      <ListItem href='/catalog/language/c' title='C' />
                      <ListItem href='/catalog/language/php' title='PHP' />
                      <ListItem href='/catalog/language/r' title='R' />
                      <ListItem href='/catalog/language/rust' title='Rust' />

                      <NavigationMenuBanner>
                        <NavigationMenuBannerTitle>
                          Choose your path
                        </NavigationMenuBannerTitle>
                        <NavigationMenuBannerDescription>
                          Explore all of our career paths and find the one that
                          is right for you.
                        </NavigationMenuBannerDescription>
                      </NavigationMenuBanner>
                      <ListItem
                        href='/career-path/full-stack-engineer'
                        title='Full-Stack Engineer'
                      />
                      <ListItem
                        href='/career-path/front-end-engineer'
                        title='Front End Engineer'
                      />
                      <ListItem
                        href='/career-path/back-end-engineer'
                        title='Back End Engineer'
                      />
                      <ListItem
                        href='/career-path/computer-science'
                        title='Computer Science'
                      />
                      <ListItem
                        href='/career-path/data-scientist'
                        title='Data Scientist'
                      />
                      <ListItem
                        href='/career-path/cybersecurity'
                        title='Cybersecurity'
                      />
                    </ul>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger>
                    <Library />
                    Resources
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className='space-y-2'>
                      <NavigationMenuBanner>
                        <NavigationMenuBannerTitle>
                          Learning & practice tools
                        </NavigationMenuBannerTitle>
                        <NavigationMenuBannerDescription>
                          Explore all of our free tools to help you learn and
                          practice.
                        </NavigationMenuBannerDescription>
                      </NavigationMenuBanner>
                      <ListItem href='/articles' title='Articles'>
                        Learn more about in-depth technical topics.
                      </ListItem>
                      <ListItem href='/cheatsheets' title='Cheatsheets'>
                        Quick reference guides for our courses.
                      </ListItem>
                      <ListItem href='/code-challenges' title='Code Challenges'>
                        Practice your skills with code challenges.
                      </ListItem>

                      <ListItem href='/projects' title='Projects'>
                        Follow along with our guided projects.
                      </ListItem>

                      <NavigationMenuBanner>
                        <NavigationMenuBannerTitle>
                          Inspiration & career
                        </NavigationMenuBannerTitle>
                        <NavigationMenuBannerDescription>
                          Get inspired and explore career resources.
                        </NavigationMenuBannerDescription>
                      </NavigationMenuBanner>
                      <ListItem
                        href='https://www.codevera.org/blog/category/career'
                        externalLink
                        title='Career'
                      >
                        Find career advice and resources.
                      </ListItem>
                      <ListItem
                        href='https://www.codevera.org/blog/category/inspiration'
                        externalLink
                        title='Inspiration'
                      >
                        Find inspiration for your coding journey.
                      </ListItem>
                      <ListItem
                        href='/career-center/job-readiness'
                        title='Job-readiness checker'
                      >
                        Assess your job readiness with AI.
                      </ListItem>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger>
                    <Handshake />
                    Community
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <ul className='space-y-2'>
                      <NavigationMenuBanner>
                        <NavigationMenuBannerTitle>
                          Explore our community
                        </NavigationMenuBannerTitle>
                        <NavigationMenuBannerDescription>
                          Join events, ask questions, and meet other learners
                          through our community projects.
                        </NavigationMenuBannerDescription>
                      </NavigationMenuBanner>
                      <ListItem href='/forum' title='Forum'>
                        Join discussions and ask questions.
                      </ListItem>
                      <ListItem href='/events' title='Events'>
                        Join community events and meetups.
                      </ListItem>
                      <ListItem href='/community/projects' title='Projects'>
                        Get industry-like experience through community projects.
                      </ListItem>
                      <ListItem
                        href='https://www.codevera.org/blog'
                        externalLink
                        title='Blog'
                      >
                        Stay up-to-date with our blog.
                      </ListItem>
                      <ListItem
                        href='/community/leaderboard'
                        title='Leaderboard'
                      >
                        See how you stack up against others.
                      </ListItem>
                      <ListItem
                        title="Learner's Stories"
                        href='https://www.codevera.org/blog/category/learner-stories'
                        externalLink
                      >
                        Read about other learners&apos; experiences.
                      </ListItem>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </NavigationMenu>
    </header>
  );
};

export { Navbar };
