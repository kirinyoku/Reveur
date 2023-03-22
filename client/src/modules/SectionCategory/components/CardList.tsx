import Card from '../../../ui/Card';
import { data } from '../../../utils/data';
import { CardListProps } from '../types/CardList';

const CardList = ({ categoryId, maxPrice, sort }: CardListProps) => {
  return (
    <ul className="flex justify-center gap-4 sm:justify-between flex-wrap">
      {data.map((card) => {
        return <Card card={card} key={card.id} />;
      })}
    </ul>
  );
};

export default CardList;
