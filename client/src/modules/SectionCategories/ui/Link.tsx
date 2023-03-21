import { Link as A } from 'react-router-dom';
import { LinkProps } from '../types/Link';

const Link = ({ children, to }: LinkProps) => {
  return (
    <button className="absolute min-w-[5rem] md:min-w-[7rem] w-fit h-fit p-2 top-0 bottom-0 left-0 right-0 m-auto bg-white uppercase text-xs md:text-base font-semibold">
      <A to={to}>{children}</A>
    </button>
  );
};

export default Link;
