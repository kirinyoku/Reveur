import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const ConsumerMenu = () => {
  const iconStyles = 'cursor-pointer text-gray-600 hover:text-gray-800 transition-colors';

  return (
    <menu className="flex flex-1 justify-end gap-2">
      <Link to="/">
        <SearchIcon className={iconStyles} />
      </Link>
      <Link to="/">
        <PersonIcon className={iconStyles} />
      </Link>
      <Link to="/">
        <FavoriteBorderOutlinedIcon className={iconStyles} />
      </Link>
      <Link to="/">
        <Badge badgeContent={'0'} color="primary">
          <ShoppingCartOutlinedIcon className={iconStyles} />
        </Badge>
      </Link>
    </menu>
  );
};

export default ConsumerMenu;
