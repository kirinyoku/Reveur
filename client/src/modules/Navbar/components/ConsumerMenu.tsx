import React from 'react';
import { useState } from 'react';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Cart from '../../Cart';

const ConsumerMenu = () => {
  const products = useSelector((state: RootState) => state.cart.products);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const iconStyles = 'cursor-pointer text-gray-600 hover:text-gray-800 transition-colors';

  return (
    <>
      <menu className="flex flex-1 justify-end gap-2 relative">
        <Link to="/">
          <SearchIcon className={iconStyles} />
        </Link>
        <Link to="/">
          <PersonIcon className={iconStyles} />
        </Link>
        <Link to="/">
          <FavoriteBorderOutlinedIcon className={iconStyles} />
        </Link>
        <button onClick={handleClick}>
          <Badge badgeContent={products.length} color="primary">
            <ShoppingCartOutlinedIcon className={iconStyles} />
          </Badge>
        </button>
        <Cart open={open} handleClose={handleClose} anchorEl={anchorEl} />
      </menu>
    </>
  );
};

export default ConsumerMenu;
