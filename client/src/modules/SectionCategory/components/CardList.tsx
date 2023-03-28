import Card from '../../../ui/Card';
import useFetch from '../../../hooks/useFetch';
import { CardListProps } from '../types/CardList';
import { IProduct } from '../../../types/CardProps';
import { useSelector } from 'react-redux';

const CardList = ({ categoryId, maxPrice }: CardListProps) => {
  const { data, isLoading, isError } = useFetch<IProduct[]>(
    `/products?populate=*&[filters][categories][id]=${categoryId}`,
  );

  const sort = useSelector((state: any) => state.selectedSubCategories);

  return (
    <ul className="flex justify-center gap-4 sm:justify-between flex-wrap">
      {data && data.map((item) => <Card card={item} key={item.id} />)}
    </ul>
  );
};

export default CardList;
