import { useAppSelector } from '../../app/hooks';
import Cart from '../../features/cart/Cart';

export default function CartPage() {
  const { cartItems } = useAppSelector((state) => state.cart);

  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);

  return (
    <section className="">
      <div className="flex justify-between items-center">
        <h1 className="head my-8">Your Cart 🛒</h1>
        <p>Total cost: ₹ {totalPrice}</p>
      </div>
      <Cart />
    </section>
  );
}
