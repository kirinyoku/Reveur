import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <h2 className="hidden md:block">
      <Link to="/" className="text-3xl">
        Rêveur
      </Link>
    </h2>
  );
};

export default Logo;
