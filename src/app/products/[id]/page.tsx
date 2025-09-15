import SelectedProduct from "@/api/singleProduct.api";
import SingleProductDetails from "@/app/_components/productDetails/ProductDetails";
import SingleProduct from "@/app/_components/singleProduct/SingleProduct";
import React from "react";
("./../../_components/productDetails/ProductDetails");

export default async function ProductDetails({ params }) {
  let { id } = await params;
  let data = await SelectedProduct(id);
  console.log(data);
  

  return (
    <>
      <div className="py-12">
        <SingleProductDetails data={data} />
      </div>
    </>
  );
}
