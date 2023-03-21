import { Link } from 'react-router-dom';
import { CategoriesProps } from '../types/Categories';

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <div className="flex justify-center gap-3">
      {categories.map((category) => {
        return (
          <Link
            key={category.title}
            className="text-xl font-medium text-gray-600 hover:text-black transition-colors"
            to={category.to}>
            {category.title}
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
