'use client';

import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

type Props = {
  children: ReactNode;
};

export default function Provider({ children }: Props) {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
}
