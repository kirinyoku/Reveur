import Logo from '../ui/Logo';
import BurgerMenu from './BurgerMenu';
import Categories from './Categories';
import ConsumerMenu from './ConsumerMenu';
import { pages, categories } from '../utils/data';

const Navbar = () => {
  return (
    <header className="grid gap-2 p-4 max-w-[1100px] m-auto">
      <div className="flex justify-between items-center border-b-2 pb-3">
        <BurgerMenu anchor="left" pages={pages} className="flex-1" />
        <Logo />
        <ConsumerMenu />
      </div>
      <Categories categories={categories} />
    </header>
  );
};

export default Navbar;
