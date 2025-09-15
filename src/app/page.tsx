import Image from "next/image";
import MainSlider from "./_components/mainSlider/MainSlider";
import CategoriesSlider from "./_components/categoriesSlider/CategoriesSlider";
import HomeProducts from "./_components/homeProducts/HomeProducts";

export default function Home() {
  
  return (
    <>
      <div className="container w-[80%] mx-auto py-12">
        <div className="shadow-2xl dark:shadow-gray-600">
          <MainSlider />
        </div>
        <CategoriesSlider />
        <HomeProducts/>
      </div>
    </>
  );
}
