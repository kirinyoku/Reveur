'use client';

import Card from '@/ui/Card';
import Loading from './Loading';
import fetcher from '@/utils/fecther';
import { useQuery } from '@tanstack/react-query';
import useFilterStore from '@/store/filter';
import getProducts from '@/utils/getProducts';

export default function CardList() {
  const { data: products, isLoading } = getProducts();

  const searchProduct = useFilterStore((state) => state.search);
  const selectedCategory = useFilterStore((state) => state.selectedCategory);
  const selectedSubCategory = useFilterStore((state) => state.selectedSubCategory);

  return (
    <section>
      <h2 className="uppercase px-8 mb-4 md:text-xl font-medium">{'you might be interested'}</h2>
      {isLoading && <Loading />}
      <ul className="grid-container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-full mx-auto px-4 md:px-8">
        {products &&
          products.map((product) => {
            if (product.categories?.some((category) => category.title === selectedCategory)) {
              if (!selectedSubCategory && !searchProduct) {
                return (
                  <li key={product.id}>
                    <Card product={product} />
                  </li>
                );
              } else if (
                product.sub_categories![0].title === selectedSubCategory &&
                !searchProduct
              ) {
                return (
                  <li key={product.id}>
                    <Card product={product} />
                  </li>
                );
              } else if (searchProduct && product.title.toLowerCase().includes(searchProduct)) {
                return (
                  <li key={product.id}>
                    <Card product={product} />
                  </li>
                );
              }
            }
          })}
      </ul>
    </section>
  );
}
