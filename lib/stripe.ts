import Stripe from 'stripe';
import { loadStripe } from '@stripe/stripe-js';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2022-11-15',
  typescript: true,
});

// public key
export const stripePromise = loadStripe(
  'pk_test_51MqIY3JKmZJy0bBPjzlVSKp56Hb37G2ZNcr7xOGu1BMyrALkJSs90crihhdqHcA3WutwEAAixhc7jm8TYTai0teo00t3ROUwhz',
);
