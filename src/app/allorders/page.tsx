"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import test from "../../../public/images/3515938.jpg";
import { CartContext } from "@/Context/CartContext";
import getUserOrders from "@/allordersActions/getUserOrders.action";
import Orders from "../_components/Orders/Orders";

export default function allorders() {
  const cartContext = useContext(CartContext);
  const [allOrders, setallOrders] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  if (!cartContext) {
    throw new Error("Cart component must be used within CartContextProvider");
  }
  const { userId } = cartContext;
  async function getOrders() {
    try {
      let res = await getUserOrders(userId);
      console.log(userId, res);
      if (res) {
        setallOrders(res);
        setisLoading(false);
      }
    } catch (err) {
      throw new Error();
    }
  }

  useEffect(() => {
    if (userId) {
      getOrders();
    }
  }, [userId]);

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
    <div className="container w-[60%] mx-auto my-12">
      <div className="mt-28 dark:text-white">
        <div className="mb-4">
          <h1 className="text-3xl mb-2 font-semibold text-gray-700 dark:text-gray-100">
            My Orders
          </h1>
          <p className="text-gray-500 dark:text-gray-200">
            {allOrders.length} orders found
          </p>
        </div>
        {allOrders.length < 1 ? (
          <h2 className="text-center mt-5 text-4xl text-gray-600 dark:text-white">
            No orders to show
          </h2>
        ) : (
          <>
            <Orders userId={userId} />
          </>
        )}
      </div>
    </div>
  );
}
