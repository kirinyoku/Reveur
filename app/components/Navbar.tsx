import Cart from './Cart';
import UserAuth from './UserAuth';
import Menu from './Menu';
import Link from 'next/link';
import Search from './Search';

export default function Navbar() {
  return (
    <header className="bg-transparent fixed top-0 z-40 w-full" id="primary-header">
      <div className="flex flex-wrap justify-between p-4 md:p-8">
        <div className="flex space-between items-start gap-2 md:gap-12">
          <Menu />
          <Link href="/">
            <h1 className="absolute top-3 h-min  text-6xl md:text-9xl lg:font-medium">Rêveur</h1>
          </Link>
        </div>
        <div className="flex h-fit items-center space-between gap-4">
          <Search />
          <Cart />
          {/* @ts-expect-error Async Server Component */}
          <UserAuth /> 
        </div>
      </div>
    </header>
  );
}
