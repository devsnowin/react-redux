import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../api/product';
import Product from '../../components/Product';

function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
      console.log('Products', data);
    })();
  }, []);

  return (
    <section className="center w-full mx-auto gap-4">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
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
