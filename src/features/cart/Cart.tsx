import { useAppSelector } from '../../app/hooks';
import CartItemBox from '../../components/CartItemBox';

const Cart = () => {
  const { cartItems } = useAppSelector((state) => state.cart);

  return (
    <div className="flex flex-wrap items-center flex-col gap-4">
      {cartItems?.map((item) => (
        <CartItemBox key={item.id} item={item} />
      ))}
      {cartItems.length === 0 && <p>Cart is empty</p>}
    </div>
  );
};
export default Cart;
