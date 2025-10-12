"use server";

import getMyToken from "@/utilities/getMyToken";
import { checkoutType } from "@/schema/checkout.schema";

export default async function onlinePayment(
  cartId: string,
  formValues: checkoutType
) {
  const token = await getMyToken();

  if (!token) {
    throw new Error("login first");
  }
  let res = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXT_URL}`,
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
