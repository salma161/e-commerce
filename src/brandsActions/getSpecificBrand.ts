"use server";
export default async function getSpecificBrand(id: string) {
  let res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?brand=${id}`
  );

  let { data } = await res.json();

  return data;
}
