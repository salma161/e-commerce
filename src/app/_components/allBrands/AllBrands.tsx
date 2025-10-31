import getAllBrands from "@/brandsActions/getAllBrands";
import { CategoryType } from "@/types/allCategories.type";
import Link from "next/link";
import React from "react";

export default async function AllBrands() {
  let { data } = await getAllBrands();
  console.log(data);

  return (
    <>
      {data.map((brand: CategoryType) => (
        <div
          className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 mt-10"
          key={brand._id}
        >
          <div className="p-3">
            <Link href={`/brands/${brand._id}`}>
              <div
                style={{ backgroundImage: `url(${brand.image})` }}
                className="cat relative border cursor-pointer shadow-xl shadow-gray-200 border-gray-300 bg-size-[150px] bg-no-repeat rounded-md bg-center h-40 flex flex-wrap justify-center items-center"
              ></div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
