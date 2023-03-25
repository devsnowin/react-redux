// https://fakestoreapi.com/products
const END_POINT = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  const res = await fetch(`${END_POINT}`);
  const data = await res.json();

  return data;
};
