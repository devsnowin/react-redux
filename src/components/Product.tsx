import { useDispatch } from 'react-redux';
import { addProduct } from '../features/cart/cart.slice';

const Product = (props: { product: Product }) => {
  const { product } = props;
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addProduct(product));
  };

  return (
    <div className="border-2 w-full max-w-xs flex flex-col justify-between items-center self-stretch px-6 py-6">
      <img
        src={product.image}
        alt={product.description}
        className="w-full h-52 block object-cover"
      />
      <div className="py-4 flex flex-col gap-2 w-full">
        <h1>{product.title}</h1>
        <p>₹ {product.price}</p>
        <button
          type="button"
          className="border-2 py-2 w-full"
          onClick={addProductToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default Product;
