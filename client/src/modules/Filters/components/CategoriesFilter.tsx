import useFetch from '../../../hooks/useFetch';
import { useState } from 'react';
import { IProduct } from '../../../types/CardProps';
import { useDispatch } from 'react-redux';
import { setSelectedSubCategories } from '../../../store/filterReducer';

const CategoriesFilter = (props: { categoryId: number }) => {
  const dispatch = useDispatch();

  const { data, isLoading, isError } = useFetch<IProduct[]>(
    `/sub-categories?[filters][categories][id][$eq]=${props.categoryId}`,
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    dispatch(
      setSelectedSubCategories({
        value,
        isChecked,
      }),
    );
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
                value={category.attributes.title}
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
