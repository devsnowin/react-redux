import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../app/store';
import Github from './icons/Github';
import ShoppingBag from './icons/ShoppingBag';

function Navbar() {
  const { totalItems } = useSelector((state: RootState) => state.cart);

  return (
    <header className="py-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link to="/">React Store .</Link>
      </h1>
      <nav className="flex items-center gap-4">
        <Link to="https://zipy.live/snowin/github" target="_blank">
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
