import Navbar from './components/Navbar';
import Provider from './components/Provider';
import { siteConfig } from '@/config/site';

import './globals.css';

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Branded clothing',
    'Premium quality clothes',
    'Online clothing store',
    'Fashion',
    'Style',
    'Casual wear',
    'Special occasions',
    'Comfortable clothing',
    'Top brands',
    "Women's clothing",
    "Men's clothing",
    'Fashion accessories',
    'Designer clothing',
    'Affordable fashion',
    'Trendy clothing',
  ],
  authors: [
    {
      name: 'kirinyoku',
      url: siteConfig.links.linkedin,
    },
  ],
  creator: 'kirinyoku',
  themeColor: [{ media: '(prefers-color-scheme: light)', color: 'white' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og.jpg`],
    creator: '@shadcn',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Navbar />
          {children}
        </Provider>
        <script src="//code.tidio.co/n1vpq2ulqtka0aaowcascetsv3whhuwh.js" async></script>
      </body>
    </html>
  );
}
