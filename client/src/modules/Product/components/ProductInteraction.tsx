import { useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const ProductInteraction = () => {
  const [quntity, setQuntity] = useState(1);

  return (
    <section className="flex flex-col gap-4 flex-grow-[1] shrink basis-0">
      <h2 className="text-3xl font-semibold">Title</h2>
      <strong className="text-blue-500 text-2xl font-medium">$199</strong>
      <p className="text-lg font-light">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, quasi illum amet nesciunt
        culpa excepturi possimus. Magnam illo animi ea! Placeat pariatur ab, quibusdam officiis
        illum nihil aspernatur eius corrupti!
      </p>
      <div className="flex items-center gap-3">
        <button
          className="flex justify-center items-center h-8 w-8 bg-gray-200 text-xl"
          onClick={(e) => setQuntity((prev) => (prev === 1 ? 1 : prev - 1))}>
          -
        </button>
        <span className="flex justify-center items-center w-2">{quntity}</span>
        <button
          className="flex justify-center items-center h-8 w-8 bg-gray-200 text-xl"
          onClick={(e) => setQuntity((prev) => prev + 1)}>
          +
        </button>
      </div>
      <button className="md:w-64 p-2 uppercase bg-blue-500 text-white">
        <AddShoppingCartIcon /> add to cart
      </button>
      <ul className="flex gap-4 py-4 lg:mb-12 text-blue-500 font-medium text-sm lg:text-base">
        <li>
          <button className="uppercase">
            <FavoriteBorderIcon /> add to wish list
          </button>
        </li>
        <li>
          <button className="uppercase">
            <BalanceIcon /> add to compare
          </button>
        </li>
      </ul>
      <ul className="flex flex-col gap-1 text-gray-500">
        <li>Vendor: Polo</li>
        <li>Product Type: T-Shirt</li>
        <li>Tag: T-Shirt, Woman, Top</li>
      </ul>
      <hr />
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
};

export default ProductInteraction;
