import { CategoriesFilterProps } from '../types/CategoriesFilter';

const CategoriesFilter = ({ categories }: CategoriesFilterProps) => {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-medium mb-2">Product Categories</h2>
      {categories.map((category) => {
        return (
          <div key={category}>
            <input className="mb-2" type="checkbox" id={category} value={category} />
            <label className="ml-2 capitalize" htmlFor={category}>
              {category}
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesFilter;
