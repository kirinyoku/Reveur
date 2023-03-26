import Card from '../../../ui/Card';
import useFetch from '../../../hooks/useFetch';
import { CardListProps } from '../types/CardList';
import { IProduct } from '../../../types/CardProps';

const CardList = ({ categoryId, maxPrice, sort }: CardListProps) => {
  const { data, isLoading, isError } = useFetch<IProduct[]>(
    `/products?populate=*&[filters][categories][id]=${categoryId}`,
  );

  return (
    <ul className="flex justify-center gap-4 sm:justify-between flex-wrap">
      {data && data.map((item) => <Card card={item} key={item.id} />)}
    </ul>
  );
};

export default CardList;
