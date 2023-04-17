import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
};

export default function Button({ children, variant, onClick }: ButtonProps) {
  if (!variant) {
    variant = 'primary';
  }

  if (variant === 'primary') {
    return (
      <button
        onClick={onClick}
        className="text-lg uppercase border border-black py-2 px-8 bg-black hover:bg-transparent text-white hover:text-black transition-colors">
        {children}
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className="text-lg uppercase border border-black py-2 px-8 hover:bg-black hover:text-white transition-colors">
        {children}
      </button>
    );
  }
}
