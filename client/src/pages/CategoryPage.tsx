import Filters from '../modules/Filters';
import SectionCategory from '../modules/SectionCategory';
import { useParams } from 'react-router-dom';

const CategoryPage = () => {
  const categoryId = parseInt(useParams().id as string);

  return (
    <main className="mb-12 py-2 px-4 md:px-12 flex flex-col md:flex-row gap-5 md:gap-0">
      <Filters categoryId={categoryId} />
      <SectionCategory categoryId={categoryId} />
    </main>
  );
};

export default CategoryPage;
