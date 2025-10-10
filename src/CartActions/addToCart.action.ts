"use server";

import getMyToken from "@/utilities/getMyToken";

export default async function AddToCart(id: string) {
  const token = await getMyToken();
  console.log(token);

  if (!token) {
    throw new Error("please login first");
  }
  let res = await fetch("https://ecommerce.routemisr.com/api/v1/cart", {
    method: "POST",
    headers: {
      token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ productId: id }),
  });
  let payload = await res.json();

  return payload;
}
