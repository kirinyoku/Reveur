'use client';

import Card from '@/ui/Card';
import Loading from '@/ui/Loading';
import getProducts from '@/helpers/getProducts';

export default function Trending() {
  const { data: products, isLoading } = getProducts();

  const trendingProducts = products?.filter((product) => product.type === 'TRENDING');

  return (
    <section>
      <p className="text-slate-500 text-sm md:text-base text-center max-w-3xl mx-auto mb-8 px-4">
        Trending: Looking for the hottest styles of the moment? Look no further than our trending
        section. Here, you&apos;ll find the most popular items from our top brands, all in one
        place. From statement pieces to everyday essentials, these are the styles that everyone is
        talking about. So if you want to stay on top of the latest fashion trends, this is the
        section for you.
      </p>
      {isLoading && <Loading />}
      <ul className="grid-container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-full mx-auto px-4 md:px-8">
        {trendingProducts &&
          trendingProducts.map((product) => <Card product={product} key={product.id} />)}
      </ul>
    </section>
  );
}
