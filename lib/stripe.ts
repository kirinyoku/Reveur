import Stripe from 'stripe';
import { loadStripe } from '@stripe/stripe-js';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-11-15',
  typescript: true,
});

export const stripePromise = loadStripe(process.env.STRIPE_PUBLIC_KEY || '');
