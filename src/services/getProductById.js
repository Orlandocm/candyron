export const getProductById = async (id) => {
  const response = await fetch('/src/data/products.json');
  const products =  await response.json();
  const product = products.find((product)=> product.id === id);
  return product;
}