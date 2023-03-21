import Link from '../ui/Link';
import { useMemo } from 'react';
import { CategoryCardProps } from '../types/CategoryCard';

const CategoryCard = ({ type, title, img }: CategoryCardProps) => {
  const getStyle = (type: 'default' | 'wide' | 'tall' = 'default') => {
    switch (type) {
      case 'wide':
        return 'lg:col-span-2';
      case 'tall':
        return 'lg:row-span-2';
      case 'default':
        return '';
    }
  };

  const style = useMemo(() => {
    return getStyle(type);
  }, [type]);

  return (
    <div className={`flex overflow-hidden relative ${style}`}>
      <img className="w-full h-full object-cover" src={img} alt={`${title} category`} />
      <Link to="/products/1">{title}</Link>
    </div>
  );
};

export default CategoryCard;
