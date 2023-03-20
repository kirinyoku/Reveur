import { Link } from 'react-router-dom';
import { CategoriesProps } from '../types/Categories';

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <div className="flex justify-center gap-3 sm:text-xl">
      {categories.map((category) => {
        return (
          <Link key={category.title} className="border-black hover:border-b-2" to={category.to}>
            {category.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
