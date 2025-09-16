"use client"
import Image from "next/image";
import React from "react";
import err from "../../public/images/404-error.png";

export default function error() {
  return (
    <div className="mt-28 py-12 flex justify-center items-center w-[80%] mx-auto">
      <Image src={err} alt="error" />
    </div>
  );
}
