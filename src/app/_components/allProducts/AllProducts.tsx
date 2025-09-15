import getProducts from "@/api/products.api";
import React from "react";
import SingleProduct from "../singleProduct/SingleProduct";

export default async function AllProducts({limit}) {
  let data = await getProducts(limit);

  return (
    <>
      {data.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </>
  );
}
