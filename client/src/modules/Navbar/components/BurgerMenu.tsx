import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SwipeableDrawer, List, ListItem } from '@mui/material';
import { BurgerMenuProps } from '../types/BurgerMenu';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const BurgerMenu = ({ anchor, pages, className }: BurgerMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (isOpen: boolean) => (event: React.MouseEvent) => {
    setIsOpen(isOpen);
  };

  return (
    <menu className={className}>
      <button onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ fontSize: '2rem' }} />
      </button>
      <SwipeableDrawer
        anchor={anchor}
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}>
        <button onClick={toggleDrawer(false)} className="flex justify-end px-2 pt-2">
          <CloseIcon sx={{ fontSize: '2rem' }} />
        </button>
        <List sx={{ width: 'min(25rem, 100vw)', fontSize: '1.3rem', padding: '0' }}>
          {pages.map((page) => {
            return (
              <ListItem
                key={page.title}
                sx={{ borderBottom: '1px solid #c8ccd5', paddingTop: '0', marginBottom: '8px' }}>
                <Link className="hover:text-black" to={page.to}>
                  {page.title}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </SwipeableDrawer>
    </menu>
  );
};

export default BurgerMenu;
