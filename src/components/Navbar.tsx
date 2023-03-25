import { Link } from 'react-router-dom';
import { useAppSelector } from '../app/hooks';
import Github from './icons/Github';
import ShoppingBag from './icons/ShoppingBag';

function Navbar() {
  const { totalItems } = useAppSelector((state) => state.cart);

  return (
    <header className="py-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link to="/">React Store .</Link>
      </h1>
      <nav className="flex items-center gap-4">
        <Link to="https://github.com/im-snowin/react-redux" target="_blank">
          <Github />
        </Link>
        <Link to="/cart" className="relative">
          <ShoppingBag />
          <span className="absolute -top-2 -right-2 bg-red-500 w-5 h-5 grid place-items-center rounded-full">
            <p className="text-sm font-bold">{totalItems}</p>
          </span>
        </Link>
      </nav>
    </header>
  );
}
export default Navbar;
