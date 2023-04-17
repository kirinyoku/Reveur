'use client';

import { useRef, FormEvent, useEffect } from 'react';
import getCategories from '@/utils/getCategories';
import useFilterStore from '@/store/filter';

export default function Filter() {
  const searchRef = useRef<HTMLInputElement>(null);

  const selectedCategory = useFilterStore((state) => state.selectedCategory);
  const selectedSubCategory = useFilterStore((state) => state.selectedSubCategory);

  const setSearch = useFilterStore((state) => state.setSearch);
  const setCategory = useFilterStore((state) => state.setCategory);
  const setSubCategory = useFilterStore((state) => state.setSubCategory);

  const { data: categories, isLoading, isSuccess } = getCategories();

  let index: number = 0;

  if (isSuccess) {
    index = categories.findIndex((category) => category.title === selectedCategory);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = searchRef.current!.value.toLowerCase();
    setSearch(value);
    setSubCategory('');
  };

  const reset = () => {
    setSubCategory('');
  };

  useEffect(() => {
    if (!selectedSubCategory) {
      searchRef.current?.focus();
    }
  }, []);

  return (
    <div className="grid w-full sticky z-30 top-0 pt-24 md:pt-44 pb-4 bg-white">
      <div className="w-full px-8">
        <ul className="flex gap-2 md:gap-4 uppercase text-sm md:text-lg">
          {isLoading && <li>Loading categories...</li>}
          {isSuccess &&
            categories.map((category) => (
              <li key={category.id}>
                <button
                  onClick={() => setCategory(category.title)}
                  className={`uppercase ${
                    category.title.toLocaleLowerCase() === selectedCategory &&
                    'border-b-2 border-black'
                  }`}>
                  {category.title}
                </button>
              </li>
            ))}
        </ul>
      </div>
      <div className="px-8 md:mt-4">
        <form onSubmit={handleSubmit}>
          <input
            ref={searchRef}
            type="text"
            placeholder="search for an item"
            className="uppercase text-sm text-black mt-2 py-2 border-b border-black outline-none w-full placeholder-black"
          />
        </form>
      </div>
      <div className="flex flex-col gap-2 md:flex-row justify-between items-start w-full px-8 mt-4">
        <ul className="flex flex-wrap gap-2 text-xs md:text-base">
          {isSuccess &&
            categories[index].sub_categories!.map((subCategory) => {
              return (
                <li
                  onClick={(e) => setSubCategory(subCategory.title)}
                  className={`uppercase cursor-pointer border px-2 border-black hover:bg-black hover:text-white transition-colors ${
                    selectedSubCategory === subCategory.title && 'bg-black text-white'
                  }`}
                  key={subCategory.id}>
                  {subCategory.title}
                </li>
              );
            })}
        </ul>
        {selectedSubCategory && (
          <button onClick={reset} className="uppercase hover:underline text-sm md:text-base">
            reset filter
          </button>
        )}
      </div>
    </div>
  );
}
