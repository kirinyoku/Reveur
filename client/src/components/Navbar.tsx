import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Typography, Badge, Drawer, List, ListItem } from '@mui/material';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => (event: React.MouseEvent) => {
    setIsOpen(isOpen);
  };

  return (
    <header className="grid gap-2 p-4 max-w-[1100px] m-auto">
      <div className="flex justify-between items-center border-b-2 pb-3">
        <nav className="flex-1">
          <button onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ fontSize: '2rem' }} />
          </button>
          <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
            <List sx={{ width: 'min(300px, 60vw)' }}>
              <ListItem>
                <Link className="hover:text-black" to="/">
                  Home
                </Link>
              </ListItem>
              <ListItem>
                <Link className="hover:text-black" to="/">
                  About
                </Link>
              </ListItem>
              <ListItem>
                <Link className="hover:text-black" to="/">
                  Contact
                </Link>
              </ListItem>
              <ListItem>
                <Link className="hover:text-black" to="/">
                  Store
                </Link>
              </ListItem>
            </List>
          </Drawer>
        </nav>
        <Typography
          component="h1"
          sx={{ display: { xs: 'none', sm: 'block' }, flex: 1, textAlign: 'center' }}>
          <Link to="/" className="text-5xl">
            Rêveur
          </Link>
        </Typography>
        <menu className="flex flex-1 justify-end gap-2">
          <Link to="/">
            <SearchIcon className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors" />
          </Link>
          <Link to="/">
            <PersonIcon className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors" />
          </Link>
          <Link to="/">
            <FavoriteBorderOutlinedIcon className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors" />
          </Link>
          <Link to="/">
            <Badge badgeContent={'0'} color="primary">
              <ShoppingCartOutlinedIcon className="cursor-pointer text-gray-600 hover:text-gray-800 transition-colors" />
            </Badge>
          </Link>
        </menu>
      </div>
      <div className="flex justify-center gap-3 sm:text-xl">
        <Link className="border-black hover:border-b-2" to="/products/1">
          Women
        </Link>
        <Link className="border-black hover:border-b-2" to="/products/2">
          Men
        </Link>
        <Link className="border-black hover:border-b-2" to="/products/3">
          Children
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
