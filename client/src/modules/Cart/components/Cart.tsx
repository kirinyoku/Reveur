import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { CartProps } from '../types/Cart';
import Button from '../../../ui/Button';

const Cart = ({ open, handleClose, anchorEl }: CartProps) => {
  const products = [
    {
      id: 1,
      img: 'https://static.zara.net/photos///2023/V/0/1/p/2646/212/800/2/w/301/2646212800_6_1_1.jpg?ts=1677514720690',
      img2: 'https://static.zara.net/photos///2023/V/0/1/p/2646/212/800/2/w/1121/2646212800_2_3_1.jpg?ts=1677586661067',
      title: 'Skirt',
      oldPrice: 19,
      currentPrice: 12,
      isNew: true,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate sint ut at cum necessitatibus deleniti quaerat nulla ducimus, nisi excepturi nostrum hic exercitationem adipisci suscipit quidem consequuntur atque vero.',
    },
    {
      id: 2,
      img: 'https://static.zara.net/photos///2023/V/0/1/p/2646/212/800/2/w/301/2646212800_6_1_1.jpg?ts=1677514720690',
      img2: 'https://static.zara.net/photos///2023/V/0/1/p/2646/212/800/2/w/1121/2646212800_2_3_1.jpg?ts=1677586661067',
      title: 'Skirt',
      oldPrice: 19,
      currentPrice: 12,
      isNew: false,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cupiditate sint ut at cum necessitatibus deleniti quaerat nulla ducimus, nisi excepturi nostrum hic exercitationem adipisci suscipit quidem consequuntur atque vero.',
    },
  ];

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
            <img className="w-20 h-26 object-cover" src={product.img} alt={product.title} />
            <div>
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="hidden md:block text-gray-600 pr-2">
                {product.desc.substring(0, 80)}...
              </p>
              <strong className="text-lg text-blue-500 font-medium">
                1 x ${product.currentPrice}
              </strong>
            </div>
            <button className="flex justify-end flex-grow text-red-500 hover:text-red-700 transition-colors">
              <DeleteOutlineIcon />
            </button>
          </MenuItem>
        );
      })}
      <div className="flex justify-between px-4 py-2">
        <span className="text-lg font-semibold">SUBTOTAL</span>
        <span className="text-lg text-blue-500 font-medium">$123</span>
      </div>
      <div className="flex flex-col gap-2 items-start px-4 py-2">
        <Button>proceed to checkout</Button>
        <button className="text-red-500 hover:underline capitalize">reset cart</button>
      </div>
    </Menu>
  );
};

export default Cart;
