import { useAppDispatch } from '../app/hooks';
import {
  addProduct,
  decreaseItemQuantity,
  removeProduct,
  type CartItem,
} from '../features/cart/cart.slice';

const CartItemBox = (props: { item: CartItem }) => {
  const { item } = props;
  const dispatch = useAppDispatch();

  return (
    <div className="bg-[#2b2b2b] px-4 py-2 flex items-center gap-4 w-full max-w-lg">
      <img
        src={item.image}
        alt={item.description}
        className="w-36 object-cover"
      />
      <div className="flex flex-col gap-4 w-full">
        <span className="w-full">
          <h1>{item.title}</h1>
          <p>₹ {item.price}</p>
        </span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="bg-slate-200 text-[#121212] px-2 font-bold"
            onClick={() => dispatch(addProduct(item))}
          >
            +
          </button>
          <p>{item.quantity}</p>
          <button
            type="button"
            className="bg-slate-200 text-[#121212] px-2 font-bold"
            onClick={() => dispatch(decreaseItemQuantity(item))}
          >
            -
          </button>
        </div>
        <button
          type="button"
          className="bg-white text-[#121212] px-4 py-2"
          onClick={() => dispatch(removeProduct(item))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};
export default CartItemBox;
