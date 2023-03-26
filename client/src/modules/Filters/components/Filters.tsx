import CategoriesFilter from './CategoriesFilter';
import PriceFilter from './PriceFilter';
import SortFilter from './SortFilter';

const Filters = (props: { categoryId: number }) => {
  return (
    <aside className="grow-[1] shrink basis-0 md:sticky h-full top-10">
      <CategoriesFilter categoryId={props.categoryId} />
      <PriceFilter />
      <SortFilter />
    </aside>
  );
};

export default Filters;
