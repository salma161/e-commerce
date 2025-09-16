import React from "react";
import notf from "./../../public/images/error-404-concept-landing-page.png";
import Image from "next/image";
export default function notFound() {
  return (
    <div className="py-12 flex justify-center items-center w-[80%] mx-auto">
      <Image src={notf} alt="not-found" className="w-[700px]" />
    </div>
  );
}
