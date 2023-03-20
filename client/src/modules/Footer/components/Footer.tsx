import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { footerLists } from '../utils/data';
import List from '../ui/List';
import Logo from '../ui/Logo';

const Footer = () => {
  return (
    <footer className="max-w-[1100px] m-auto p-4">
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8">
        <List listName={footerLists.categories.listName} items={footerLists.categories.items} />
        <List listName={footerLists.links.listName} items={footerLists.links.items} />
        <List listName={footerLists.about.listName} items={footerLists.about.items} />
        <List listName={footerLists.contact.listName} items={footerLists.contact.items} />
      </section>
      <section>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
          <Logo />
          <p>© Copyright 2023. All Rights Reserved</p>
          <img
            className="h-12"
            src="./img/payment.png"
            alt="payment methods: PayPal, Visa, MasterCard, American Express, Discover NetWork"
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;
