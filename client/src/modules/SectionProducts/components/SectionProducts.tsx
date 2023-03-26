import Card from '../../../ui/Card';
import useFetch from '../../../hooks/useFetch';
import { SectionProductsProps } from '../types/SectionProducts';
import { IProduct } from '../../../types/CardProps';

const SectionProducts = ({ type }: SectionProductsProps) => {
  const { data, isLoading, isError } = useFetch<IProduct[]>(
    `/products?populate=*&[filters][type][$eq]=${type}`,
  );

  return (
    <section className="grid my-8 px-4 max-w-[1100px] m-auto">
      <div className="flex flex-col md:flex-row text-center md:text-left justify-between gap-2">
        <h2 className="capitalize text-2xl md:text-3xl font-medium grow-[2] shrink basis-0">
          {type} Products
        </h2>
        <p className="grow-[3] shrink basis-0 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut quam vitae quos nulla quis
          cum! Nisi corporis quia cum deleniti, ea amet quo officiis accusantium rerum aut
          blanditiis nam corrupti.
        </p>
      </div>
      <div className="w-full grid place-items-center gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {data && data.map((product) => <Card key={product.id} card={product} />)}
      </div>
    </section>
  );
};

export default SectionProducts;
