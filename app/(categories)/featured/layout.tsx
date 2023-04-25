import { ReactNode } from 'react';

export const metadata = {
  title: 'FEATURED',
  description:
    " Our featured section is where we showcase our favorite pieces from across our entire collection. These are the items that we think are must-haves for any fashion-forward wardrobe. From timeless classics to of-the-moment styles, you'll find a little bit of everything here.",
};

export default function FeaturedLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
