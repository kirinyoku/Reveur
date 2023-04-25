type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    linkedin: string;
  };
};

export const siteConfig: SiteConfig = {
  name: 'Rêveur',
  description:
    "Discover your unique style with Rêveur - the ultimate destination for branded clothing online. Our collection features premium quality clothes from top brands that blend sophistication with comfort. From casual wear to special occasions, we've got you covered. Shop now and experience the perfect balance of style and comfort!",
  url: 'https://reveur.vercel.app',
  ogImage: 'https://reveur.vercel.app/og.jpg',
  links: {
    twitter: 'https://twitter.com/shadcn',
    linkedin: 'https://www.linkedin.com/in/oleksandr-rudenok-a33974247/',
  },
};
