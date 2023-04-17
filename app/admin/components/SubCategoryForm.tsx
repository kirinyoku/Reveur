'use client';

import ky from 'ky';
import toast from 'react-hot-toast';
import fetcher from '@/utils/fecther';
import { useRef, FormEvent, useState, ChangeEvent } from 'react';
import { useQuery, useMutation, isError } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

export default function SubCategoryForm() {
  const inputTitle = useRef<HTMLInputElement | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  const client = useQueryClient();

  const { data, isLoading, isError } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: () => fetcher('categories'),
  });

  const { mutate: addSubCategory } = useMutation({
    mutationFn: (subCategory: { title: string; categoriesTitle: string[] }) => {
      return ky.post('/api/sub-categories', { json: subCategory }).json();
    },
    onError: () => {
      toast.error('Error');
    },
    onSuccess: () => {
      toast.success('Success');
      client.invalidateQueries({ queryKey: ['sub-categories'] });
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;

    if (target.checked && !categories.includes(target.value)) {
      setCategories([...categories, target.value]);
    }
    if (!target.checked && categories.includes(target.value)) {
      setCategories(categories.filter((item) => item !== target.value));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputTitle.current) {
      addSubCategory({ title: inputTitle.current.value, categoriesTitle: categories });
      setCategories([]);
      inputTitle.current.value = '';
    }
  };

  return (
    <form className="bg-white px-8 pt-2 mb-4 shadow-md" onSubmit={handleSubmit}>
      <h2 className="block text-gray-800 text-3xl font-bold mb-2">SubCategory</h2>
      <div className="grid gap-4">
        <fieldset>
          <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="subCategoryTitle">
            title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ref={inputTitle}
            type="text"
            placeholder="category title"
            id="subCategoryTitle"
            name="title"
            required
          />
        </fieldset>
        <div className="grid">
          <h3 className="block text-gray-700 text-xl font-bold">Categories</h3>
          <div className="flex flex-wrap gap-3">
            {isLoading && <p>Categories are loading...</p>}
            {isError && <p className="text-red-500">An error occurred while loading categories.</p>}
            {data &&
              data.map((item) => (
                <fieldset className="flex items-end gap-1 pt-2" key={item.id}>
                  <label
                    className="text-lg text-slate-600 font-medium leading-none"
                    htmlFor={`${item.title}`}>
                    {item.title}
                  </label>
                  <input
                    className="text-2xl"
                    type="checkbox"
                    id={`${item.title}`}
                    name={`${item.title}`}
                    value={`${item.title}`}
                    onChange={handleChange}
                  />
                </fieldset>
              ))}
          </div>
        </div>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded focus:outline-none focus:shadow-outline"
        type="submit">
        Submit
      </button>
    </form>
  );
}
