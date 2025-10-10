"use client";
import AddToCart from "@/CartActions/addToCart.action";
import { CartContext } from "@/Context/CartContext";
import React, { useContext } from "react";
import { toast } from "sonner";

export default function AddBtn({ id }: { id: string }) {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("Cart component must be used within CartContextProvider");
  }

  const { numOfCartItems, setnumOfCartItems } = cartContext;
  async function checkAddProduct(id: string) {
    let res = await AddToCart(id);

    if (res.status === "success") {
      toast.success("Product was added successfully", {
        position: "top-center",
        duration: 3000,
      });
      setnumOfCartItems(numOfCartItems + 1);
    } else {
      toast.error("Can't add product", {
        position: "top-center",
        duration: 3000,
      });
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => checkAddProduct(id)}
        className="w-full cursor-pointer  text-white bg-main hover:bg-main-dark  focus:outline-none font-medium text-sm px-4 py-2 text-center dark:bg-main dark:hover:bg-main-dark"
      >
        Add to cart
      </button>
    </>
  );
}
