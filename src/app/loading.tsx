import React from "react";

export default function loading() {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
          <div className="rounded-full h-full w-full bg-slate-100 dark:bg-gray-800 background-blur-md"></div>
        </div>
      </div>
    </>
  );
}
