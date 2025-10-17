"use server";

export default async function getUserOrders(userId: string | null) {
  let res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`
  );


  let payload = await res.json();

  return payload;
}
