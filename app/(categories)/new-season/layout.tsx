import { ReactNode } from 'react';

export const metadata = {
  title: 'NEW SEASON',
  description:
    "This section is where you'll find the latest and greatest styles from our top brands. From fresh prints to modern silhouettes, we're always updating our inventory to keep you on-trend and looking your best.",
};

export default function NewSeasonLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
