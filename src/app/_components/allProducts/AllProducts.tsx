import getProducts from "@/api/products.api";
import React from "react";
import SingleProduct from "../singleProduct/SingleProduct";
import { productType } from "@/types/product.type";

export default async function AllProducts({ limit }: { limit: number }) {
  let data = await getProducts(limit);

  return (
    <>
      {data.map((product: productType) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </>
  );
}
