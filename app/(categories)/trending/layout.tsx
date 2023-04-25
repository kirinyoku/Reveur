import { ReactNode } from 'react';

export const metadata = {
  title: 'TRENDING',
  description:
    "Here, you'll find the most popular items from our top brands, all in one place. From statement pieces to everyday essentials, these are the styles that everyone is talking about.",
};

export default function TrendingLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
