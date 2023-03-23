import { FC } from 'react';
import { ButtonProps } from '../types/Button';

const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`md:w-64 p-2 uppercase bg-blue-500 hover:bg-blue-600 text-white transition-colors ${className}`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
