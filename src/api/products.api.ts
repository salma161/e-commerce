export default async function getProducts(limit : number) {
  let response = await fetch(`https://ecommerce.routemisr.com/api/v1/products?limit=${limit}`);
  let { data } = await response.json();

  return data;
  
  
}
