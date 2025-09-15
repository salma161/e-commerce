export default async function getProducts(limit) {
  let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products?limit=${limit}`);
  let { data } = await response.json();

  return data;
  
  
}
