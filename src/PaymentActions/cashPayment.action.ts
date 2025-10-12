"use server";

import getMyToken from "@/utilities/getMyToken";
import { checkoutType } from "@/schema/checkout.schema";

export default async function cashPayment(
  cartId: string,
  formValues: checkoutType
) {
  const token = await getMyToken();

  if (!token) {
    throw new Error("login first");
  }
  let res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
    {
      method: "POST",
      headers: {
        token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        shippingAddress: formValues,
      }),
    }
  );

  let payload = await res.json();
  return payload;
}
