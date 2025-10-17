import getUserOrders from "@/allordersActions/getUserOrders.action";
import { allOrders, allordersType, CartItem } from "@/types/allorders.type";
import React, { useEffect, useState } from "react";

export default function Orders({ userId }: { userId: string | null }) {
  const [orders, setorders] = useState([]);

  async function getOrders() {
    let data = await getUserOrders(userId);
    setorders(data);
  }

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      {orders.map((order: allOrders) => (
        <div key={order._id} className="rounded-sm shadow shadow-gray-400 mt-7">
          <div className="flex flex-wrap bg-gray-100 dark:bg-gray-600  pb-3 shadow-sm">
            <div className="w-1/2 pt-2 ps-2 ">
              <h2 className="text-xl dark:text-gray-100 mb-1 font-semibold text-gray-700">
                Order #{order.id}
              </h2>
              <p className="text-gray-500 dark:text-gray-200">Placed on {order.createdAt}</p>
            </div>
            <div className="w-1/2 text-end relative">
              <span className="bg-main-light text-gray-100 p-1 rounded-sm text-sm mb-4">
                {order.isPaid ? "Paid" : "Unpaid"} -{" "}
                {order.isDelivered ? "Delivered" : "Processing"}
              </span>
              <p className="text-2xl font-semibold dark:text-main-light text-main mt-2 me-2">
                {order.totalOrderPrice} E£
              </p>
            </div>
          </div>
          <div className="shipping p-4 mt-2">
            <div className="title flex flex-wrap items-center font-medium">
              <i className="fa-solid fa-location-dot text-main"></i>
              <h3 className="ms-1 text-xl text-gray-700 dark:text-gray-100">Shipping Address</h3>
            </div>
            <div className="address p-4">
              <div className="p-2 bg-gray-100 rounded-sm dark:bg-gray-600 dark:text-gray-100 text-gray-700 shadow-sm">
                <p>{order.shippingAddress.city}</p>
                <p>{order.shippingAddress.details}</p>
                <p>{order.shippingAddress.phone}</p>
              </div>
            </div>
          </div>
          <div className="payment p-4 mt-2">
            <div className="title flex flex-wrap items-center font-medium">
              <i className="fa-solid fa-credit-card text-main"></i>
              <h3 className="ms-1 text-xl text-gray-700 dark:text-gray-100">Payment Method</h3>
            </div>
            <div className="address p-4">
              <span className="border border-gray-300 rounded-sm dark:text-gray-200  p-1 me-2 text-gray-500">
                {order.paymentMethodType}
              </span>
              {order.isPaid ? (
                <>
                  <span className=" text-emerald-500">
                    <i className="fa-solid fa-circle-check"></i>
                    <span>Paid</span>
                  </span>
                </>
              ) : (
                <>
                 <span className=" text-red-500">
                <i className="fa-solid fa-circle-xmark"></i>
                <span>Unpaid</span>
              </span>
                </>
              )}
            </div>
          </div>
          <div className="items p-4 mt-2">
            <div className="title flex flex-wrap items-center font-medium">
              <i className="fa-solid fa-credit-card text-main"></i>
              <h3 className="ms-1 text-xl text-gray-700 dark:text-gray-100">Order Items ({order.cartItems.length})</h3>
            </div>
            {order.cartItems.map((item: CartItem) => (
              <div
                key={item._id}
                className="item p-2 border dark:bg-gray-600 dark:border-gray-600 border-gray-200 m-4 rounded-sm shadow-sm"
              >
                <div className="item-inner flex flex-wrap">
                  <div className="left-part w-1/2 flex flex-wrap items-center">
                    <div className="photo w-1/3">
                      <img src={item.product.imageCover} />
                    </div>
                    <div className="desc w-1/2 ps-2">
                      <h3 className="text-xl font-medium dark:text-gray-100 text-gray-700">
                        {item.product.title}
                      </h3>
                      <span className="text-gray-500 dark:text-gray-200">
                        {item.product.category.name} •
                      </span>
                      <span className="text-gray-500 dark:text-gray-200 ms-1">
                        {item.product.brand.name}
                      </span>
                    </div>
                  </div>
                  <div className="right-part w-1/2 pe-4 text-end flex flex-wrap flex-col justify-center">
                    <p className="text-xl font-medium text-gray-700 dark:text-gray-100">
                      {item.price} E£
                    </p>
                    <p className="text-gray-500 dark:text-gray-200">Qty: {item.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
