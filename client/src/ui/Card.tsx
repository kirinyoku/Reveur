import { Link } from 'react-router-dom';
import { CardProps } from '../types/CardProps';

const Card = ({ card }: CardProps) => {
  return (
    <Link className="w-full max-w-[22rem] flex flex-col gap-3" to={`/product/${card.id}`}>
      <div>
        <div className="w-full h-[24rem] overflow-hidden relative mb-2">
          {card.isNew && (
            <span className="absolute top-2 left-2 bg-white text-teal-700 p-1 z-[4] text-sm font-semibold">
              New Season
            </span>
          )}
          <img
            className="w-full h-full object-cover absolute z-[3] hover:z-[2]"
            src={card.img}
            alt="primary"
          />
          <img
            className="w-full h-full object-cover absolute z-[2] hover:z-[3]"
            src={card.img2}
            alt="secondary"
          />
        </div>
        <h3 className="text-xl font-base">{card.title}</h3>
        <div className="flex gap-3 text-lg">
          <del className="text-gray-700 line-through">${card.oldPrice}</del>
          <strong className="font-semibold">${card.currentPrice}</strong>
        </div>
      </div>
    </Link>
  );
};

export default Card;
