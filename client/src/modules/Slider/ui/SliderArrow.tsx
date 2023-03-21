import { SliderArrowProps } from '../types/SliderArrow';
import NorthIcon from '@mui/icons-material/North';
import EastIcon from '@mui/icons-material/East';
import SouthIcon from '@mui/icons-material/South';
import WestIcon from '@mui/icons-material/West';

const SliderArrow = ({ direction, onClick }: SliderArrowProps) => {
  const setIcon = (direction: 'top' | 'right' | 'bottom' | 'left') => {
    switch (direction) {
      case 'top':
        return <NorthIcon />;
      case 'right':
        return <EastIcon />;
      case 'bottom':
        return <SouthIcon />;
      case 'left':
        return <WestIcon />;
    }
  };

  const icon = setIcon(direction);

  return (
    <button onClick={onClick} className="border-2 p-1 hover:bg-[#e5e7eb] transition-colors">
      {icon}
    </button>
  );
};

export default SliderArrow;
