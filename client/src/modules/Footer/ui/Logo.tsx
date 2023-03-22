import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="hidden md:block text-3xl">
      <h2>Rêveur</h2>
    </Link>
  );
};

export default Logo;
