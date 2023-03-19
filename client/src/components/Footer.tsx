import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer className="max-w-[1100px] m-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm mb-8">
        <ul className="flex flex-col gap-2">
          <li>
            <h3 className="text-base font-semibold">Categories</h3>
          </li>
          <li>
            <Link to="/products/1">Women</Link>
          </li>
          <li>
            <Link to="/products/2">Men</Link>
          </li>
          <li>
            <Link to="/products/3">Children</Link>
          </li>
          <li>
            <Link to="/products/4">Accessories</Link>
          </li>
          <li>
            <Link to="/products/5">New Arrivals</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <h3 className="text-base font-semibold">Links</h3>
          </li>
          <li>
            <Link to="/">FAQ</Link>
          </li>
          <li>
            <Link to="/">Pages</Link>
          </li>
          <li>
            <Link to="/">Stores</Link>
          </li>
          <li>
            <Link to="/">Compare</Link>
          </li>
          <li>
            <Link to="/">Cookies</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <h3 className="text-base font-semibold">About</h3>
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni maxime voluptate autem
            accusantium, delectus dolor sit?
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li>
            <h3 className="text-base font-semibold">Contact</h3>
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni maxime voluptate autem
            accusantium, delectus dolor sit?
          </li>
        </ul>
      </div>
      <div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between ">
          <Typography component="h2" sx={{ display: { xs: 'none', md: 'block' } }}>
            <Link to="/" className="text-4xl">
              Rêveur
            </Link>
          </Typography>
          <p>© Copyright 2023. All Rights Reserved</p>
          <img
            className="h-12"
            src="./img/payment.png"
            alt="payment methods: PayPal, Visa, MasterCard, American Express, Discover NetWork"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
