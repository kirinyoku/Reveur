'use client';

import { useState } from 'react';
import { Listbox } from '@headlessui/react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Button } from '@/ui/Button';
import useCartStore from '@/store/cart';

export default function Info({ product }: { product: Product }) {
  const [quantity, setQuntity] = useState(1);

  const calcPrice = () => (quantity * product.currentPrice).toFixed(2);

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]);

  const addToCart = useCartStore((state) => state.addToCart);

  const add = () => {
    if (product.id) {
      addToCart({
        id: product.id,
        title: product.title,
        description: product.description,
        img: product.imgURL,
        price: product.currentPrice,
        size: selectedSize,
        quantity: quantity,
      });
    }
  };

  return (
    <section className="flex flex-col gap-2 max-w-xl">
      <h2 className="md:text-3xl font-semibold">{product.title}</h2>
      <h3 className="md:text-2xl font-medium">by {product.brand}</h3>
      <strong className="md:text-2xl font-medium">{calcPrice() + ' USD'}</strong>
      <p className="md:text-lg font-light">{product.description}</p>
      <div className="flex items-center gap-3 py-2">
        <button
          className="flex justify-center items-center text-2xl w-8 h-8 border border-black"
          onClick={() => setQuntity((prev) => (prev === 1 ? 1 : prev - 1))}>
          &#65123;
        </button>
        <span className="flex justify-center items-center w-2">{quantity}</span>
        <button
          className="flex justify-center items-center text-2xl w-8 h-8 border border-black"
          onClick={() => setQuntity((prev) => prev + 1)}>
          &#65122;
        </button>
      </div>
      <h2 className="uppercase">select the size:</h2>
      <Listbox value={selectedSize} onChange={setSelectedSize}>
        <Listbox.Button className="py-2 border border-black uppercase">
          {selectedSize}
        </Listbox.Button>
        <Listbox.Options>
          {sizes.map((size) => (
            <Listbox.Option
              className="cursor-pointer border-b border-black py-1"
              key={size}
              value={size}>
              {size}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      <Button variant="default" onClick={add}>
        <AddShoppingCartIcon /> add to cart
      </Button>
      <ul className="flex flex-col gap-2 text-gray-500 uppercase">
        <li>
          description <hr />
        </li>
        <li>
          additional information <hr />
        </li>
        <li>
          faq <hr />
        </li>
      </ul>
    </section>
  );
}
