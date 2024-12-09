import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const logoVariants = cva('', {
  variants: {
    size: {
      default: 100,
      sm: 50,
      md: 100,
      lg: 150,
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

export interface LogoProps
  extends React.HTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof logoVariants> {
  href?: string;
  externalLink?: boolean;
}

const Logo = React.forwardRef<HTMLAnchorElement, LogoProps>(
  ({ className, href, externalLink, ...props }, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Comp: any = href ? Link : 'div';
    return (
      <Comp
        {...(href ? { href } : {})}
        className={cn(logoVariants({ className }), className)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as React.Ref<any>}
        {...props}
        target={externalLink ? '_blank' : undefined}
        rel={externalLink ? 'noopener noreferrer' : undefined}
      >
        <Image
          src='/logos/logo.svg'
          alt='logo'
          width={128}
          height={128}
          aria-label="Go to Codevera academy's home page"
        />
      </Comp>
    );
  }
) as React.ForwardRefExoticComponent<LogoProps> & {
  Icon: React.ForwardRefExoticComponent<
    LogoProps & React.RefAttributes<HTMLAnchorElement>
  >;
};

Logo.displayName = 'Logo';

Logo.Icon = React.forwardRef<HTMLAnchorElement, LogoProps>(
  ({ className, href, externalLink, ...props }, ref) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Comp: any = href ? Link : 'div';
    return (
      <Comp
        {...(href ? { href } : {})}
        className={cn(logoVariants({ className }), className)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as React.Ref<any>}
        {...props}
        target={externalLink ? '_blank' : undefined}
        rel={externalLink ? 'noopener noreferrer' : undefined}
      >
        <Image
          src='/logos/icon.webp'
          alt='logo'
          width={32}
          height={32}
          className='w-8'
          aria-label="Go to Codevera's home page"
        />
      </Comp>
    );
  }
);

Logo.Icon.displayName = 'Logo.Icon';

export { Logo };
