import { ReactNode } from 'react';
import Footer from '../components/Footer';

export default function CategoriesLayout({ children }: { children: ReactNode }) {
  return (
    <main className="mt-24 md:mt-40">
      {children}
      <Footer />
    </main>
  );
}
