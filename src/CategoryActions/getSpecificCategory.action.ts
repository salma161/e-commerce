"use server";
export default async function getSpecificCategory(id: string) {
  let res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?category[in]=${id}`
  );

  let {data} = await res.json();

  return data;
}
