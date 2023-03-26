import useFetch from '../../../hooks/useFetch';
import { useState } from 'react';
import { IProduct } from '../../../types/CardProps';

const CategoriesFilter = (props: { categoryId: number }) => {
  const [selectedSubCategories, setSelectedSubCategories] = useState<string[]>([]);

  const { data, isLoading, isError } = useFetch<IProduct[]>(
    `/sub-categories?[filters][categories][id][$eq]=${props.categoryId}`,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedSubCategories([...selectedSubCategories, value]);
    } else {
      setSelectedSubCategories(selectedSubCategories.filter((item) => item !== value));
    }
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-medium mb-2">Product Categories</h2>
      {data &&
        data.map((category) => {
          return (
            <div key={category.id}>
              <input
                className="mb-2"
                type="checkbox"
                id={category.id.toString()}
                value={category.id}
                onChange={handleChange}
              />
              <label className="ml-2 capitalize" htmlFor={category.id.toString()}>
                {category.attributes.title}
              </label>
            </div>
          );
        })}
    </div>
  );
};

export default CategoriesFilter;
