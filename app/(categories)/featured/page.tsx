'use client';

import Card from '@/ui/Card';
import Loading from '@/ui/Loading';
import getProducts from '@/utils/getProducts';

export default function Featured() {
  const { data: products, isLoading } = getProducts();

  const featuredProducts = products?.filter((product) => product.type === 'FEATURED');

  return (
    <section>
      <p className="text-slate-500 text-sm md:text-base text-center max-w-3xl mx-auto mb-8 px-4">
        Featured: Our featured section is where we showcase our favorite pieces from across our
        entire collection. These are the items that we think are must-haves for any fashion-forward
        wardrobe. From timeless classics to of-the-moment styles, you&apos;ll find a little bit of
        everything here. So whether you&apos;re looking for a new statement piece or just want to
        see what&apos;s new and exciting in the world of fashion, be sure to check out our featured
        section.
      </p>
      {isLoading && <Loading />}
      <ul className="grid-container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-full mx-auto px-4 md:px-8">
        {featuredProducts &&
          featuredProducts.map((product) => <Card product={product} key={product.id} />)}
      </ul>
    </section>
  );
}
