import { ReactNode } from 'react';

export default function CategoriesLayout({ children }: { children: ReactNode }) {
  return <main className="mt-24 md:mt-40">{children}</main>;
}
