import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <h1 className="flex-1 text-center hidden md:block">
      <Link to="/" className="text-5xl">
        Rêveur
      </Link>
    </h1>
  );
};

export default Logo;
