import { stripe } from '@/lib/stripe';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const products: CartProduct[] = req.body;
    const lineItems = products.map((product) => {
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.title,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: product.quantity,
      };
    });
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        line_items: lineItems,
        payment_method_types: ['card'],
        success_url: `${process.env.CLIENT_URL}/?success=true`,
        cancel_url: `${process.env.CLIENT_URL}/?success=false`,
        shipping_address_collection: { allowed_countries: ['US', 'CA', 'UA', 'PL', 'GB'] },
      });
      // res.redirect(303, session.url as string);
      res.status(200).json(session);
    } catch (error: any) {
      console.log(error);
      res.status(error.statusCode || 500).json(error.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
