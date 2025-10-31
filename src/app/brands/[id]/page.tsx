import SingleProduct from "@/app/_components/singleProduct/SingleProduct";
import getSpecificBrand from "@/brandsActions/getSpecificBrand";
import { productType } from "@/types/product.type";
import React from "react";

export default async function brandDetails({
  params,
}: {
  params: { id: string };
}) {
  let { id } = await params;
  let data = await getSpecificBrand(id);

  return (
    <>
      <div className="container w-[80%] mx-auto my-12">
        {data.length > 0 ? (
          <>
            <div className="flex flex-wrap mt-28">
              {data.map((product: productType) => (
                <SingleProduct key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <>
            <h1 className="text-gray-500 mt-28 text-center text-2xl dark:text-gray-200 ">
              No products to show
            </h1>
          </>
        )}
      </div>
    </>
  );
}
