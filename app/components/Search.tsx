'use client';

import Link from 'next/link';
import useFilterStore from '@/store/filter';

export default function Search() {
  const setCategory = useFilterStore((state) => state.setCategory);
  const setSubCategory = useFilterStore((state) => state.setSubCategory);

  const handleClick = (category: string, subCategory: string) => {
    setCategory(category);
    setSubCategory(subCategory);
  };

  return (
    <Link
      onClick={() => handleClick('woman', '')}
      href="/products"
      className="tracking-widest uppercase border-b border-black pr-6 mr-4 hidden sm:block">
      search
    </Link>
  );
}
