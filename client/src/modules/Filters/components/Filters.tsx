import CategoriesFilter from './CategoriesFilter';
import PriceFilter from './PriceFilter';
import SortFilter from './SortFilter';

const Filters = () => {
  return (
    <aside className="grow-[1] shrink basis-0 md:sticky h-full top-10">
      <CategoriesFilter categories={['shoes', 'skirt', 'coats']} />
      <PriceFilter />
      <SortFilter />
    </aside>
  );
};

export default Filters;
