import React from 'react';

export const metadata = {
  title: 'Sign up for our newsletter',
  description: 'Enter your email and get the latest news and trends every week.',
};

export default function NewsletterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
