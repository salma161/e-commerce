import SelectedProduct from "@/api/singleProduct.api";
import SingleProductDetails from "@/app/_components/productDetails/ProductDetails";
import SingleProduct from "@/app/_components/singleProduct/SingleProduct";
import getRelatedProducts from "@/ProductsCategoryActions/relatedProducts.action";
import { productType } from "@/types/product.type";
import React from "react";
("./../../_components/productDetails/ProductDetails");

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  let { id } = await params;
  let data = await SelectedProduct(id);

  if (!data)
    return (
      <h1 className="text-center text-3xl my-10 text-gray-600 dark:text-white">
        No products to show
      </h1>
    );

  let relatedProducts = await getRelatedProducts(data.category._id);

  return (
    <>
      <div className="container w-[80%] mx-auto my-12">
        <SingleProductDetails data={data} />
        <div className="title-banner relative ms-5 text-main mb-1 mt-24">
          <i className="fa-solid fa-certificate absolute top-[5px]"></i>
          <h5 className="ms-6 text-[16px]">Related Products</h5>
        </div>
        <div className="flex flex-wrap mt-7">
          {relatedProducts.data.map((product: productType) => (
            <SingleProduct key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}
