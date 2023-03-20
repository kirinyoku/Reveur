import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem } from '@mui/material';
import { BurgerMenuProps } from '../types/BurgerMenu';
import MenuIcon from '@mui/icons-material/Menu';

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
      <Drawer anchor={anchor} open={isOpen} onClose={toggleDrawer(false)}>
        <List sx={{ width: 'min(25rem, 60vw)', fontSize: '1.3rem' }}>
          {pages.map((page) => {
            return (
              <ListItem key={page.title}>
                <Link className="hover:text-black" to={page.to}>
                  {page.title}
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </menu>
  );
};

export default BurgerMenu;
