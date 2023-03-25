import { useEffect, useState } from 'react';
import { getProducts } from '../../api/product';
import Product from '../../components/Product';
import Spinner from '../../components/Spinner';

function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <Spinner />;

  return (
    <section className="center w-full mx-auto gap-4">
      <h1 className="head self-start my-8">Let's shop 🛒</h1>
      <div className="flex flex-wrap justify-between items-center gap-5">
        {products?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
export default Home;
