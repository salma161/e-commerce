import getAllCategories from "@/api/categories.api";
import React from "react";
import CategoriesSwipper from "../categoriesSwipper/CategoriesSwipper";

export default async function CategoriesSlider() {
  let data = await getAllCategories();
  console.log(data);

  return (
    <>
      <div>
        <div className="title-banner relative text-main mb-5">
          <i className="fa-solid fa-certificate absolute top-[5px]"></i>
          <h5 className="ms-6 text-[16px]">Categories</h5>
        </div>
        <div className="title mb-8">
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-white">
            Browse By Category
          </h2>
        </div>
        <div>
          <CategoriesSwipper data={data} />
        </div>
      </div>
    </>
  );
}
