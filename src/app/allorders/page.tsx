import React from "react";
import Image from "next/image";
import test from "../../../public/images/3515938.jpg";

export default function allorders() {
  return (
    <div className="container w-[60%] mx-auto my-12">
      <div className="mt-28 dark:text-white">
        <div className="mb-4">
          <h1 className="text-3xl mb-2 font-semibold text-gray-700">
            My Orders
          </h1>
          <p className="text-gray-500">1 order found</p>
        </div>
        <div className="rounded-sm shadow shadow-gray-400 mt-7">
          <div className="flex flex-wrap bg-gray-100 pb-3 shadow-sm">
            <div className="w-1/2 pt-2 ps-2">
              <h2 className="text-xl  mb-1 font-semibold text-gray-700">
                Order #345678
              </h2>
              <p className="text-gray-500">Placed on 12 oct</p>
            </div>
            <div className="w-1/2 text-end relative">
              <span className="bg-main-light text-gray-100 p-1 rounded-sm text-sm mb-4">
                Paid - Processing
              </span>
              <p className="text-2xl font-semibold text-main mt-2 me-2">
                4,400 E£
              </p>
            </div>
          </div>
          <div className="shipping p-4 mt-2">
            <div className="title flex flex-wrap items-center font-medium">
              <i className="fa-solid fa-location-dot text-main"></i>
              <h3 className="ms-1 text-xl text-gray-700">Shipping Address</h3>
            </div>
            <div className="address p-4">
              <div className="p-2 bg-gray-100 rounded-sm text-gray-700 shadow-sm">
                <p>Cairo</p>
                <p>Cairo</p>
                <p>01295794894</p>
              </div>
            </div>
          </div>
          <div className="payment p-4 mt-2">
            <div className="title flex flex-wrap items-center font-medium">
              <i className="fa-solid fa-credit-card text-main"></i>
              <h3 className="ms-1 text-xl text-gray-700">Payment Method</h3>
            </div>
            <div className="address p-4">
              <span className="border border-gray-300 rounded-sm  p-1 me-2 text-gray-500">
                credit card
              </span>
              <span className=" text-emerald-500">
                <i className="fa-solid fa-circle-check"></i>
                <span>Paid</span>
              </span>
            </div>
          </div>
          <div className="items p-4 mt-2">
            <div className="title flex flex-wrap items-center font-medium">
              <i className="fa-solid fa-credit-card text-main"></i>
              <h3 className="ms-1 text-xl text-gray-700">Order Items (3)</h3>
            </div>
            <div className="item p-2 border border-gray-200 m-4 rounded-sm shadow-sm">
              <div className="item-inner flex flex-wrap">
                <div className="left-part w-1/2 flex flex-wrap items-center">
                  <div className="photo w-1/3">
                    <Image src={test} alt="test" className="rounded-sm" />
                  </div>
                  <div className="desc w-2/3 mt-3 ps-2">
                    <h3 className="text-xl font-medium text-gray-700">
                      Item Title
                    </h3>
                    <span className="text-gray-500">category • </span>
                    <span className="text-gray-500">brand</span>
                  </div>
                </div>
                <div className="right-part w-1/2 text-end pe-2 flex flex-wrap flex-col justify-center">
                  <p className="text-xl font-medium text-gray-700">430 E£</p>
                  <p className="text-gray-500">Qty: 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
