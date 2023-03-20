import { ListProps } from '../types/List';
import { Link } from 'react-router-dom';

const List = ({ items, listName }: ListProps) => {
  return (
    <ul className="flex flex-col gap-1">
      {listName && (
        <li>
          <h3 className="text-base font-semibold">{listName}</h3>
        </li>
      )}
      {items.map((item) => {
        return (
          <li key={item.content}>
            {item.to ? <Link to={item.to}>{item.content}</Link> : item.content}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
