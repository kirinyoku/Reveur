'use client';

import Card from '@/ui/Card';
import Loading from '@/ui/Loading';
import getProducts from '@/utils/getProducts';

export default function NewSeason() {
  const { data: products, isLoading } = getProducts();

  const newSeasonProducts = products?.filter((product) => product.isNew === true);

  return (
    <section>
      <p className="text-slate-500 text-sm md:text-base text-center max-w-3xl mx-auto mb-8 px-4">
        New Season: This section is where you&apos;ll find the latest and greatest styles from our
        top brands. From fresh prints to modern silhouettes, we&apos;re always updating our
        inventory to keep you on-trend and looking your best. Whether you&apos;re shopping for a
        special occasion or just looking to refresh your wardrobe, our new season collection is the
        perfect place to start.
      </p>
      {isLoading && <Loading />}
      <ul className="grid-container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-full mx-auto px-4 md:px-8">
        {newSeasonProducts &&
          newSeasonProducts.map((product) => <Card product={product} key={product.id} />)}
      </ul>
    </section>
  );
}
