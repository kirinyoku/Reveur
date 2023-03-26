import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Button from '../../../ui/Button';
import { CartProps } from '../types/Cart';
import { useSelector } from 'react-redux';
import { UPLOAD_IMG_URL } from '../../../utils/constants';
import { useDispatch } from 'react-redux';
import { removeFromCart, resetCart } from '../../../store/cartReducer';
import type { RootState } from '../../../store/store';

const Cart = ({ open, handleClose, anchorEl }: CartProps) => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.cart.products);

  const totalPrice = () => {
    let total = 0;
    products.forEach((product) => (total += product.quantity * product.price));
    return total.toFixed(2);
  };

  const remove = (id: number) => {
    dispatch(
      removeFromCart({
        id,
      }),
    );
  };

  const reset = () => {
    dispatch(resetCart());
  };

  return (
    <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
      <h2 className="text-gray-800 text-2xl px-4 py-2">Product in your cart</h2>
      {products.map((product) => {
        return (
          <MenuItem
            sx={{
              gap: '0.5rem',
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem 1rem',
            }}
            key={product.id}>
            <img
              className="w-20 h-26 object-cover"
              src={UPLOAD_IMG_URL + product.img}
              alt={product.title}
            />
            <div>
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="hidden md:block text-gray-600 pr-2">
                {product.desc.substring(0, 80)}...
              </p>
              <strong className="text-lg text-blue-500 font-medium">
                {product.quantity} x ${product.price}
              </strong>
            </div>
            <button
              onClick={() => remove(product.id)}
              className="flex justify-end flex-grow text-red-500 hover:text-red-700 transition-colors">
              <DeleteOutlineIcon />
            </button>
          </MenuItem>
        );
      })}
      <div className="flex justify-between px-4 py-2">
        <span className="text-lg font-semibold">SUBTOTAL</span>
        <span className="text-lg text-blue-500 font-medium">${totalPrice()}</span>
      </div>
      <div className="flex flex-col gap-2 items-start px-4 py-2">
        <Button>proceed to checkout</Button>
        <button onClick={reset} className="text-red-500 hover:underline capitalize">
          reset cart
        </button>
      </div>
    </Menu>
  );
};

export default Cart;
