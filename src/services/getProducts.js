export const getProducts = async () => {
  const response = await fetch('/src/data/products.json');
  const products =  await response.json();
  return products;
}