import React from "react";
import AllProducts from "../allProducts/AllProducts";
import Link from "next/link";

export default function HomeProducts() {
  return (
    <>
      <div className="">
        <div className="title-banner relative text-main mb-5 mt-24">
          <i className="fa-solid fa-certificate absolute top-[5px]"></i>
          <h5 className="ms-6 text-[16px]">Our Products</h5>
        </div>
        <div className="title mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
            Explore Our Products
          </h2>
        </div>
        <div>
          <div className="flex flex-wrap">
            <AllProducts limit={10} />
          </div>
        <div className="flex justify-center">
             <Link href="/products">
          <button
            type="button"
            className="cursor-pointer text-white bg-main hover:bg-main-dark mt-8 focus:outline-none font-medium rounded-md text-sm py-3 px-6 text-center dark:bg-main dark:hover:bg-main-dark"
          >
            View All Products
          </button>
         </Link>
        </div>
        </div>
      </div>
    </>
  );
}
