"use client";
import clearCartItems from "@/CartActions/clearCartItems.action";
import getUserCart from "@/CartActions/getUserCart.action";
import removeCartItem from "@/CartActions/removeCartItem.action";
import updateQuantity from "@/CartActions/updateQuantity.action";
import { CartContext } from "@/Context/CartContext";

import { CartProduct } from "@/types/cart.type";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

export default function Cart() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error("Cart component must be used within CartContextProvider");
  }

  const { numOfCartItems, setnumOfCartItems } = cartContext;

  const [products, setProducts] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [removeDisable, setremoveDisable] = useState(false);
  const [updateDisable, setupdateDisable] = useState(false);
  const [loadingUpdate, setloadingUpdate] = useState(false);
  const [currentId, setcurrentId] = useState("");
  const [total, settotal] = useState(0);
  const [cartId, setcartId] = useState("")

  async function getLoggedUserCart() {
    try {
      let res = await getUserCart();

      if (res.status === "success") {
        setProducts(res.data.products);
        setisLoading(false);
        settotal(res.data.totalCartPrice);
        setcartId(res.cartId)
     
        
      }
    } catch (err) {
      console.log(err);
      setisLoading(false);
    }
  }

  async function updateProduct(id: string, count: string, sign: string) {
    setcurrentId(id);
    setloadingUpdate(true);
    setupdateDisable(true);

    let res = await updateQuantity(id, count);

    if (res.status === "success") {
      setProducts(res.data.products);
      toast.success("product was updated successfully", {
        position: "top-center",
        duration: 3000,
      });
      setloadingUpdate(false);
      setupdateDisable(false);
      if (sign === "+") {
        setnumOfCartItems(numOfCartItems + 1);
      } else if (sign === "-") {
        setnumOfCartItems(numOfCartItems - 1);
      }
      getLoggedUserCart();
    } else {
      toast.error("can't update product", {
        position: "top-center",
        duration: 3000,
      });
      setupdateDisable(false);
      setloadingUpdate(false);
    }
  }

  async function clearCart() {
    setisLoading(true);
    let res = await clearCartItems();
    if (res.message === "success") {
      getLoggedUserCart();
      toast.success("The cart was cleared successfully", {
        position: "top-center",
        duration: 3000,
      });
      setisLoading(false);
      setnumOfCartItems(0);
    } else {
      toast.error("Can't clear cart", {
        position: "top-center",
        duration: 3000,
      });
      setisLoading(false);
    }
  }

  useEffect(() => {
    getLoggedUserCart();
  }, []);

  async function deleteProduct(id: string) {
    setremoveDisable(true);
    let res = await removeCartItem(id);

    if (res.status === "success") {
      setProducts(res.data.products);
      toast.success("Product was deleted successfully", {
        position: "top-center",
        duration: 3000,
      });
      setremoveDisable(false);
      let sum = 0;
      res.data.products.forEach((product: CartProduct) => {
        sum += product.count;
      });
      setnumOfCartItems(sum);
      getLoggedUserCart();
    } else {
      toast.error("Can't remove product", {
        position: "top-center",
        duration: 3000,
      });
      setremoveDisable(false);
    }
  }

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
          <div className="rounded-full h-full w-full bg-slate-100 dark:bg-gray-800 background-blur-md"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container w-[70%] mx-auto py-12 mt-24">
        {products.length > 0 ? (
          <>
            <div className="flex justify-end mb-10">
              <button
                onClick={() => clearCart()}
                type="button"
                className="cursor-pointer  text-white bg-main hover:bg-main-dark  focus:outline-none font-medium rounded-sm text-sm px-8 py-2 text-center dark:bg-main dark:hover:bg-main-dark"
              >
                Clear Cart
              </button>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-16 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Qty
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product: CartProduct) => (
                    <tr
                      key={product._id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="p-4">
                        <img
                          src={product.product.imageCover}
                          className="w-16 md:w-32 max-w-full max-h-full"
                        />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {product.product.title}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <button
                            disabled={updateDisable}
                            onClick={() =>
                              updateProduct(
                                product.product.id,
                                `${product.count - 1}`,
                                "-"
                              )
                            }
                            className="inline-flex disabled:bg-gray-300 disabled:text-gray-200 cursor-pointer items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                          >
                            <span className="sr-only">Quantity button</span>
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 2"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 1h16"
                              />
                            </svg>
                          </button>
                          <div>
                            {product.product.id === currentId ? (
                              loadingUpdate ? (
                                <i className="fa-solid fa-circle-notch fa-spin text-gray-400 text-[18px]"></i>
                              ) : (
                                <span className="text-[18px]">
                                  {product.count}
                                </span>
                              )
                            ) : (
                              <span className="text-[18px]">
                                {product.count}
                              </span>
                            )}
                          </div>
                          <button
                            disabled={updateDisable}
                            onClick={() =>
                              updateProduct(
                                product.product.id,
                                `${product.count + 1}`,
                                "+"
                              )
                            }
                            className="inline-flex disabled:bg-gray-300 disabled:text-gray-200 cursor-pointer items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-full focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                          >
                            <span className="sr-only">Quantity button</span>
                            <svg
                              className="w-3 h-3"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 18 18"
                            >
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 1v16M1 9h16"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {product.price * product.count} E£
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => deleteProduct(product.product.id)}
                          disabled={removeDisable}
                          className="font-medium disabled:text-gray-300 dark:disabled:text-gray-200 text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart-total my-18 flex flex-wrap justify-end dark:text-gray-100">
              <div className="border-1 rounded-sm border-gray-300 dark:border-gray-400 py-8 px-6 w-full lg:w-1/3 ">
                <h1 className="text-[18px] font-semibold">Cart Total</h1>
                <div className="flex flex-wrap justify-between border-b border-gray-300 py-5">
                  <p>Subtotal:</p>
                  <p>{total} E£</p>
                </div>
                <div className="flex flex-wrap justify-between py-5">
                  <p>Total:</p>
                  <p>{total} E£</p>
                </div>
                <div className="flex flex-wrap justify-center">
                 <Link href={`/checkout/${cartId}`}>
                  <button
                    type="button"
                    className=" cursor-pointer rounded-sm py-3 px-7  text-white bg-main hover:bg-main-dark  focus:outline-none font-medium text-sm text-center dark:bg-main dark:hover:bg-main-dark"
                  >
                    Proceed to checkout
                  </button>
                 </Link>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1 className="text-gray-500 text-center text-2xl dark:text-gray-200 ">
            No products to show
          </h1>
        )}
      </div>
    </>
  );
}
