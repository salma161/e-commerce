import React from "react";
import AllCategories from "../_components/allCategories/AllCategories";

export default function Categories() {
  return (
    <div className="container w-[80%] mx-auto my-12">
      <div className="flex flex-wrap mt-28">
        <AllCategories />
      </div>
    </div>
  );
}
