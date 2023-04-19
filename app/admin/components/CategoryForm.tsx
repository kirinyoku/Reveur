'use client';

import ky from 'ky';
import toast from 'react-hot-toast';
import { FormEvent, useRef } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useQueryClient } from '@tanstack/react-query';

export default function CategoryForm() {
  const inputTitle = useRef<HTMLInputElement | null>(null);
  const inputImgURL = useRef<HTMLInputElement | null>(null);

  const client = useQueryClient();

  const { mutate: addCategory } = useMutation({
    mutationFn: (category: Category) => {
      return ky.post('/api/categories', { json: category }).json();
    },
    onError: () => {
      toast.error('Error');
    },
    onSuccess: () => {
      toast.success('Success');
      client.invalidateQueries({ queryKey: ['categories'] });
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputTitle.current && inputImgURL.current) {
      addCategory({ title: inputTitle.current.value, img: inputImgURL.current.value });
      inputTitle.current.value = '';
      inputImgURL.current.value = '';
    }
  };

  return (
    <form className="bg-white px-8 pt-2 my-4 shadow-md" onSubmit={handleSubmit}>
      <h2 className="block text-gray-800 text-3xl font-bold mb-2">Category</h2>
      <div className="grid gap-4">
        <fieldset>
          <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="categoryTitle">
            title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ref={inputTitle}
            type="text"
            placeholder="category title"
            id="categoryTitle"
            name="categoryTitle"
            required
          />
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
