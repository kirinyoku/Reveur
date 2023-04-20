import { NextApiRequest, NextApiResponse } from 'next';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // const products: CartProduct[] = await req.body;
    // const lineItems = products.map((product) => {
    //   return {
    //     price: product.price,
    //     quantity: product.quantity,
    //   };
    // });
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: [
          {
            price: '{{PRICE_ID}}',
            quantity: 1,
          },
        ],
        payment_method_types: ['card'],
        success_url: `http://localhost:3000/?success=true`,
        cancel_url: `http://localhost:3000/?success=false`,
        shipping_address_collection: { allowed_countries: ['US', 'CA'] },
      });
      res.redirect(303, session.url);
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
