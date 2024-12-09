'use client';

import * as React from 'react';

import { useMediaQuery } from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui/command';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';

import {
  Calculator,
  Calendar,
  CreditCard,
  Search,
  Settings,
  Smile,
  User,
} from 'lucide-react';

export const Searchbar = () => {
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsSearchOpen((isSearchOpen) => !isSearchOpen);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop) {
    return (
      <>
        <Button
          variant={'secondary'}
          className='text-sm text-black gap-x-2'
          onClick={() => setIsSearchOpen(!isSearchOpen)}
        >
          Search or type a command{' '}
          <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-black opacity-100'>
            <span className='text-xs'>⌘</span>K
          </kbd>
        </Button>

        <CommandDialog open={isSearchOpen} onOpenChange={setIsSearchOpen}>
          <CommandInput placeholder='What are you looking for?' />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading='Suggestions'>
              <CommandItem>
                <Calendar />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem>
                <Smile />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem>
                <Calculator />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading='Settings'>
              <CommandItem>
                <User />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCard />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <Settings />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    );
  }

  return (
    <Drawer open={isSearchOpen} onOpenChange={setIsSearchOpen}>
      <DrawerTrigger asChild>
        <Search />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerContent>
          <SearchInput placeholder='Search for something' />

          {/* suggestions */}
          <ul className='mt-4 px-4 space-y-2'>
            <li className='flex items-center gap-2'>
              <Calendar />
              <span>Calendar</span>
            </li>
            <li className='flex items-center gap-2'>
              <Smile />
              <span>Search Emoji</span>
            </li>
            <li className='flex items-center gap-2'>
              <Calculator />
              <span>Calculator</span>
            </li>
          </ul>
        </DrawerContent>
      </DrawerContent>
    </Drawer>
  );
};

export const SearchInput = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    type='search'
    className={cn(
      'w-full p-2 text-black text-sm placeholder-muted bg-transparent focus:outline-none focus:border-primary focus:placeholder-opacity-50',
      className
    )}
    onChange={(e) => {
      e.preventDefault();
    }}
    {...props}
  />
);
