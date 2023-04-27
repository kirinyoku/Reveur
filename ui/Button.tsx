import * as React from 'react';
import { cn } from '@/helpers/cn';
import Loading from './Loading';
import { cva, VariantProps } from 'class-variance-authority';

const buttonVariants = cva('text-lg uppercase border border-black py-2 px-8 transition-colors', {
  variants: {
    variant: {
      default: 'bg-black hover:bg-transparent text-white hover:text-black',
      outline: 'hover:bg-black hover:text-white',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, isLoading, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
        disabled={isLoading}>
        {isLoading ? <Loading /> : children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
