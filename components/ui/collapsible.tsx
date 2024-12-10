'use client';

import * as React from 'react';

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';

import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Collapsible = CollapsiblePrimitive.Root;

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>
>(({ children, ...props }, ref) => {
  const [open, setOpen] = React.useState(false);

  return (
    <CollapsiblePrimitive.Trigger
      ref={ref}
      {...props}
      className='flex flex-row justify-between w-full px-4 py-2'
      onClick={() => setOpen(!open)}
    >
      <div className='flex flex-row gap-x-2'>{children}</div>
      <ChevronRight
        className={`transform transition-transform ${
          open ? 'rotate-90' : 'rotate-0'
        }`}
      />
    </CollapsiblePrimitive.Trigger>
  );
});

CollapsibleTrigger.displayName = CollapsiblePrimitive.Trigger.displayName;

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ className, ...props }, ref) => {
  return (
    <CollapsiblePrimitive.Content
      ref={ref}
      {...props}
      className={cn('border-0 border-l-2 mx-7', className)}
    />
  );
});

CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName;

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
