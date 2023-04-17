'use client';

import ky from 'ky';
import fetcher from '@/utils/fecther';
import toast from 'react-hot-toast';
import { FormEvent, ChangeEvent, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

const strFields = ['title', 'description', 'brand', 'imgURL', 'img2URL'];
const numFields = ['currentPrice', 'oldPrice'];

type FormData = {
  [k: string]: FormDataEntryValue | string[];
};

export default function ProductForm() {
  const [productCategories, setProductCategories] = useState<string[]>([]);

  const client = useQueryClient();

  const {
    data: categories,
    isLoading: categoriesIsLoading,
    isError: categoriesIsError,
  } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: () => fetcher('categories'),
  });

  const {
    data: subCategories,
    isLoading: subCategoriesIsLoading,
    isError: subCategoriesIsError,
  } = useQuery<SubCategory[]>({
    queryKey: ['sub-categories'],
    queryFn: () => fetcher('sub-categories'),
  });

  const { mutate: addProduct } = useMutation({
    mutationFn: (product: FormData) => {
      return ky.post('/api/products', { json: product });
    },
    onError: () => {
      toast.error('Error');
    },
    onSuccess: () => {
      toast.success('Success');
      client.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const product: FormData = Object.fromEntries(new FormData(e.currentTarget).entries());
    product.categories = productCategories;

    if (product.categories) {
      addProduct(product);
      setProductCategories([]);
    }

    // Reset form
    const formElements = e.currentTarget.elements;
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.tagName === 'SELECT') {
        (element as HTMLSelectElement).selectedIndex = 0;
      } else {
        (element as HTMLInputElement).value = '';
        (element as HTMLInputElement).checked = false;
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;

    if (target.checked && !productCategories.includes(target.value)) {
      setProductCategories([...productCategories, target.value]);
    }
    if (!target.checked && productCategories.includes(target.value)) {
      setProductCategories(productCategories.filter((item) => item !== target.value));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white px-8 pt-2 mb-4 shadow-md">
      <h2 className="block text-gray-800 text-3xl font-bold mb-2">Product</h2>
      <div className="grid gap-4">
        {strFields.map((field) => (
          <fieldset key={field}>
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor={`product-${field}`}>
              {field}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id={`product-${field}`}
              placeholder={`product ${field}`}
              name={field}
              required
            />
          </fieldset>
        ))}
        {numFields.map((field) => (
          <fieldset key={field}>
            <label
              className="block text-gray-700 text-xl font-bold mb-2"
              htmlFor={`product-${field}`}>
              {field}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              id={`product-${field}`}
              placeholder={`product ${field}`}
              name={field}
              min={0}
              step="0.01"
            />
          </fieldset>
        ))}
        <fieldset>
          <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="productIsNew">
            isNew
          </label>
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            id="productIsNew"
            name="isNew"
            defaultValue={'false'}>
            <option value={'false'}>false</option>
            <option value={'true'}>true</option>
          </select>
        </fieldset>
        <fieldset>
          <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="productType">
            type
          </label>
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            id="productType"
            name="type"
            defaultValue={'NORMAL'}>
            <option value={'NORMAL'}>normal</option>
            <option value={'FEATURED'}>featured</option>
            <option value={'TRENDING'}>trending</option>
          </select>
        </fieldset>
        <div className="grid">
          <h3 className="block text-gray-700 text-xl font-bold">Categories</h3>
          <div className="flex flex-wrap gap-3">
            {categoriesIsLoading && <p>Categories are loading...</p>}
            {categoriesIsError && (
              <p className="text-red-500">An error occurred while loading categories.</p>
            )}
            {categories &&
              categories.map((category) => (
                <fieldset className="flex items-end gap-1 pt-2" key={category.id}>
                  <label
                    className="text-lg text-slate-600 font-medium leading-none"
                    htmlFor={`${category.title}`}>
                    {category.title}
                  </label>
                  <input
                    className="text-2xl"
                    type="checkbox"
                    id={`${category.title}`}
                    value={`${category.title}`}
                    onChange={handleChange}
                  />
                </fieldset>
              ))}
          </div>
        </div>
        <fieldset>
          <label
            className="block text-gray-700 text-xl font-bold mb-2"
            htmlFor="productSubCategories">
            SubCategory
          </label>
          {subCategoriesIsLoading && <p>Sub-categories are loading...</p>}
          {subCategoriesIsError && (
            <p className="text-red-500">An error occurred while loading sub-categories.</p>
          )}
          {!subCategoriesIsLoading && !subCategoriesIsError && (
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="productSubCategories"
              name="subCategory">
              {subCategories &&
                subCategories.map((subCategory) => (
                  <option value={subCategory.title} key={subCategory.id}>
                    {subCategory.title}
                  </option>
                ))}
            </select>
          )}
        </fieldset>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-4 rounded focus:outline-none focus:shadow-outline"
        type="submit">
        Submit
      </button>
    </form>
  );
}
