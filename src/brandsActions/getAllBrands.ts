"use server";
export default async function getAllBrands() {
  let res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands`);

  let payload = await res.json();

  return payload;
}
