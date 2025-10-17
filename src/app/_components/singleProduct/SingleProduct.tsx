import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { productType } from "@/types/product.type";
import AddBtn from "../AddBtn/AddBtn";

export default function SingleProduct({ product }: { product: productType }) {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/5">
        <div className="prod p-4 ">
          
            <Card className="gap-2 dark:text-white dark:bg-gray-700 dark:border-0">
              <Link href={`/products/${product.id}`}>
              <CardHeader className="dark:bg-gray-700">
                <CardTitle className="dark:bg-gray-700">
                  <div>
                    <Image
                      src={product.imageCover}
                      alt="product"
                      width={500}
                      height={500}
                    />
                  </div>
                </CardTitle>
                <CardDescription className="mb-3 dark:text-gray-200">
                  {product.category.name}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="line-clamp-1 font-semibold">{product.title}</p>
              </CardContent>
              <CardFooter>
                <div className="flex justify-between items-center w-full mt-3">
                  <span className="text-sm text-main-dark font-semibold dark:text-main-lighter">
                    {product.price} E£
                  </span>
                  <div className="flex gap-1 items-center">
                    <span className="text-sm ">
                      <i className="fa-solid fa-star text-yellow-500 me-1 text-[13px]"></i>
                      {product.ratingsAverage}
                    </span>
                    <span className="text-sm">({product.ratingsQuantity})</span>
                  </div>
                </div>
              </CardFooter>
               </Link>
              <div className=" flex justify-center mt-5">
                <div className="w-[50%] rounded-md">
                     <AddBtn id={product.id}/>
                     </div>
                   </div>
            </Card>
         
        </div>
      </div>
    </>
  );
}
