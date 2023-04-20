'use client';

import { useState } from 'react';
import { SwipeableDrawer, Box, Badge } from '@mui/material';
import { loadStripe } from '@stripe/stripe-js';
import ky from 'ky';
import Button from '@/ui/Button';
import CartItem from './CartItem';
import CloseIcon from '@mui/icons-material/Close';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import useCartStore from '@/store/cart';
import WorkOffIcon from '@mui/icons-material/WorkOff';

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);

  const products = useCartStore((state) => state.products);

  const toggleDrawer = (isOpen: boolean) => (e: React.MouseEvent) => {
    setIsOpen(isOpen);
  };

  // public key
  const stripePromise = loadStripe(
    'pk_test_51MqIY3JKmZJy0bBPjzlVSKp56Hb37G2ZNcr7xOGu1BMyrALkJSs90crihhdqHcA3WutwEAAixhc7jm8TYTai0teo00t3ROUwhz',
  );

  const submitPayment = async () => {
    try {
      const stripe = await stripePromise;
      const res: any = await ky.post('/api/checkout_sessions', { json: products }).json();
      await stripe!.redirectToCheckout({
        sessionId: res?.id,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const totalPrice = () => {
    let total = 0;
    products.forEach((product) => (total += product.quantity * product.price));
    return total.toFixed(2);
  };

  return (
    <menu>
      <button onClick={toggleDrawer(true)}>
        <Badge badgeContent={products.length} color="primary" overlap="circular">
          <LocalMallOutlinedIcon />
        </Badge>
      </button>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}>
        {!!products.length ? (
          <>
            <div className="h-full flex flex-col justify-between w-[min(35rem,100vw)]">
              <div>
                <Box className="flex items-center justify-between px-2 pt-2">
                  <h2 className="text-gray-800 text-2xl uppercase">
                    Product in your cart shopping bag
                  </h2>
                  <button className="p-2" onClick={toggleDrawer(false)}>
                    <CloseIcon className="text-slate-500" />
                  </button>
                </Box>
                <Box>
                  {products.map((product) => (
                    <CartItem key={product.id} product={product} />
                  ))}
                </Box>
                <div className="flex justify-between px-4 py-2 bg-slate-100">
                  <span className="text-lg">SUBTOTAL</span>
                  <span className="text-lg font-medium">{totalPrice()} USD</span>
                </div>
              </div>
            </div>
            <div className="grid gap-2 px-2 py-2">
              <Button onClick={submitPayment} variant="secondary">
                proceed to checkout
              </Button>
            </div>
          </>
        ) : (
          <>
            <button className="p-2 text-right" onClick={toggleDrawer(false)}>
              <CloseIcon className="text-slate-500" />
            </button>
            <div className="w-[min(30rem,100vw)] h-full flex flex-col justify-center items-center gap-2 p-2">
              <h2 className="text-gray-800 text-2xl uppercase">YOUR SHOPPING BAG IS EMPTY</h2>
              <WorkOffIcon fontSize="large" />
            </div>
          </>
        )}
      </SwipeableDrawer>
    </menu>
  );
}
