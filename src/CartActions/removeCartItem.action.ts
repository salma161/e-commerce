"use server";

import getMyToken from "@/utilities/getMyToken";

export default async function removeCartItem(id: string) {
  const token = await getMyToken();

  if (!token) {
    throw new Error("login first");
  }

  let res = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
    method: "DELETE",
    headers: {
      token,
      "Content-Type": "application/json",
    },
  });

  let payload = await res.json();
  return payload;
}
