import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-maroon hover:bg-maroon/90 text-white shadow-xs shadow transition-colors',
        secondary:
          'bg-white text-black-foreground shadow-sm md:hover:text-black/95 md:hover:bg-white/95 transition-colors',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'relative bg-transparent border-0 min-w-0 min-h-0 outline-offset-[6px] font-semibold tracking-tight text-maroon hover:text-[#8c1d40] hover:no-underline before:block before:absolute before:bg-current before:w-[calc(100%-4px)] before:h-0.5 before:opacity-0 before:right-[3px] before:-bottom-0.5 before:pointer-events-none hover:before:opacity-80',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
        link: 'h-auto px-0 py-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
