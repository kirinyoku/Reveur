import { useState } from 'react';
import { useDispatch } from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import Button from '../../../ui/Button';
import { ProductProps } from '../types/Product';
import { addToCart } from '../../../store/cartReducer';

const ProductInteraction = ({ data }: ProductProps) => {
  const [quantity, setQuntity] = useState(1);

  const dispatch = useDispatch();

  const add = () => {
    dispatch(
      addToCart({
        id: data.id,
        title: data.attributes.title,
        desc: data.attributes.desc,
        img: data.attributes.img.data.attributes.url,
        price: data.attributes.currentPrice,
        quantity,
      }),
    );
  };

  const calcPrice = () => (quantity * data.attributes.currentPrice).toFixed(2);

  return (
    <section className="flex flex-col gap-3 flex-grow-[1] shrink basis-0">
      <h2 className="text-3xl font-semibold">{data.attributes.title}</h2>
      <h3 className="text-2xl font-medium">by {data.attributes.brand}</h3>
      <strong className="text-blue-500 text-2xl font-medium">${calcPrice()}</strong>
      <p className="text-lg font-light">{data.attributes.desc}</p>
      <div className="flex items-center gap-3">
        <button
          className="flex justify-center items-center h-8 w-8 bg-gray-200 text-xl"
          onClick={(e) => setQuntity((prev) => (prev === 1 ? 1 : prev - 1))}>
          -
        </button>
        <span className="flex justify-center items-center w-2">{quantity}</span>
        <button
          className="flex justify-center items-center h-8 w-8 bg-gray-200 text-xl"
          onClick={(e) => setQuntity((prev) => prev + 1)}>
          +
        </button>
      </div>
      <Button onClick={add}>
        <AddShoppingCartIcon /> add to cart
      </Button>
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
      <ul className="flex flex-col gap-1 text-gray-500 capitalize">
        <li>Vendor: {data.attributes.brand}</li>
        <li>Product Type: {data.attributes.sub_categories.data[0].attributes.title}</li>
        <li>{`Tags: ${data.attributes.sub_categories.data[0].attributes.title}, ${data.attributes.categories.data[0].attributes.title}`}</li>
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
