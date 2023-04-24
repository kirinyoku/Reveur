import React from 'react';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import useCartStore from '@/store/cart';

export default function CartItem({ product }: { product: CartProduct }) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const remove = () => {
    if (product.id) {
      removeFromCart(product);
    }
  };

  return (
    <div className="w-full flex items-stretch gap-4 px-2 my-4 hover:cursor-pointer hover:bg-slate-100">
      <img className="w-20 h-26 object-cover" src={product.img} alt="product" />
      <div className="flex flex-col justify-between">
        <h3 className="text-lg text-slate-700 font-medium">{product.title}</h3>
        <p className="hidden md:block text-gray-600 text-sm">{product.description}</p>
        <h4 className="uppercase text-slate-700 font-medium">size {product.size}</h4>
        <strong className="text-lg font-medium">
          {`${product.quantity} × ${product.price.toFixed(2)} (${(
            product.quantity * product.price
          ).toFixed(2)} USD)`}
        </strong>
      </div>
      <button onClick={remove} className="flex flex-grow items-center transition-colors">
        <DeleteOutlineOutlinedIcon />
      </button>
    </div>
  );
}
