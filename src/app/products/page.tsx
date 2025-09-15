import getProducts from "@/api/products.api";
import React from "react";
import AllProducts from "../_components/allProducts/AllProducts";

export default async function Products() {
  let data = await getProducts();

  return (
    <>
      <div className="container w-[80%] mx-auto my-12">
        <div className="flex flex-wrap mt-28">
          <AllProducts limit={data.length} />
        </div>
      </div>
    </>
  );
}
