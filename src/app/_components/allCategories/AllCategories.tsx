import React from "react";
import img from "../../../../public/images/3515938.jpg";
import getAllCategories from "@/api/categories.api";
import { CategoryType } from "@/types/allCategories.type";
import Link from "next/link";

export default async function AllCategories() {
  let data = await getAllCategories();
  console.log(data);

  return (
    <>
      {data.map((category: CategoryType) => (
        <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5 mt-10" key={category._id}>
          <div className="p-3">
            <Link href={`/categories/${category._id}`}>
              <div
                style={{ backgroundImage: `url(${category.image})` }}
                className="cat border cursor-pointer shadow-xl shadow-gray-200 border-gray-300 bg-cover rounded-md bg-center h-40 flex flex-wrap justify-center items-center"
              >
                <div className="cat-det ">
                  <h2 className="text-2xl text-center text-outline text-gray-700  font-extrabold">
                    {category.name}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
