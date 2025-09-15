import getProducts from "@/api/products.api";
import React from "react";
import SingleProduct from "../_components/singleProduct/SingleProduct";

export default async function Products() {
  let data = await getProducts();
 console.log(data);
 

  return (
    <>
      <div className="container w-[80%] mx-auto my-12">
        <div className="flex flex-wrap mt-28">
          {data.map((product) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
