import { Link } from 'react-router-dom';
import { CardProps } from '../types/CardProps';

const Card = ({ card }: CardProps) => {
  return (
    <Link className="w-full max-w-[18rem] flex flex-col gap-3" to={`/product/${card.id}`}>
      <div>
        <div className="w-full h-[24rem] overflow-hidden relative mb-2">
          {card.attributes.isNew && (
            <span className="absolute top-2 left-2 bg-white text-teal-700 p-1 z-[4] text-sm font-semibold">
              New Season
            </span>
          )}
          <img
            className="w-full h-full object-cover absolute z-[3] hover:z-[2]"
            src={card.attributes.img.data.attributes.url}
            alt="primary"
          />
          <img
            className="w-full h-full object-cover absolute z-[2] hover:z-[3]"
            src={card.attributes.img2.data.attributes.url}
            alt="secondary"
          />
        </div>
        <h3 className="text-xl font-base">{card.attributes.title}</h3>
        <div className="flex gap-3 text-lg">
          {card.attributes.oldPrice && (
            <del className="text-gray-700 line-through">${card.attributes.oldPrice}</del>
          )}
          <strong className="font-semibold">${card.attributes.currentPrice}</strong>
        </div>
      </div>
    </Link>
  );
};

export default Card;
