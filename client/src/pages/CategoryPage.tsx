import Filters from '../modules/Filters';
import SectionCategory from '../modules/SectionCategory';

const CategoryPage = () => {
  return (
    <main className="mb-12 py-2 px-4 md:px-12 flex flex-col md:flex-row gap-5 md:gap-0">
      <Filters />
      <SectionCategory />
    </main>
  );
};

export default CategoryPage;
