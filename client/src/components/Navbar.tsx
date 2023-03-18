import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="px-3 sm:px-8 sm:text-lg font-medium">
      <div className="py-4 flex justify-between items-center">
        <div className="flex gap-3 item-center">
          <div className="flex items-center">
            <img className="inline-block" src="./img/en.png" alt="language icon" />
            <KeyboardArrowDownIcon />
          </div>
          <div className="flex items-center">
            <span className="uppercase">usd</span>
            <KeyboardArrowDownIcon />
          </div>
          <nav>
            <ul className="flex gap-3 items-end">
              <li>
                <Link className="border-black hover:border-b-2" to="/products/1">
                  Women
                </Link>
              </li>
              <li>
                <Link className="border-black hover:border-b-2" to="/products/2">
                  Men
                </Link>
              </li>
              <li>
                <Link className="border-black hover:border-b-2" to="/products/3">
                  Children
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Link to="/" className="text-5xl">
            Rêveur
          </Link>
        </div>
        <div className="flex gap-8 items-end">
          <nav>
            <ul className="flex gap-3">
              <li>
                <Link className="border-black hover:border-b-2" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="border-black hover:border-b-2" to="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="border-black hover:border-b-2" to="/">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="border-black hover:border-b-2" to="/">
                  Stores
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex gap-2 items-end text-gray-600 cursor-pointer">
            <SearchIcon className="hover:text-gray-900" />
            <PersonIcon className="hover:text-gray-900" />
            <FavoriteBorderOutlinedIcon className="hover:text-gray-900" />
            <span className="relative">
              <ShoppingCartOutlinedIcon className="hover:text-gray-900" />
              <span className="text-sm w-5 h-5 rounded-2xl bg-blue-500 text-white absolute -top-1 -right-2 flex items-center justify-center">
                0
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
