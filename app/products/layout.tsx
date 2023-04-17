import { ReactNode } from 'react';
import Footer from './components/Footer';

export const metadata = {
  title: 'Products',
};

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
