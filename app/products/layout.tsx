import { ReactNode } from 'react';
import Footer from '../components/Footer';

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
