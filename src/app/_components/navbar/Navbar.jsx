"use client";
import { CartContext } from "@/Context/CartContext";
import clsx from "clsx";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";

export default function Navbar() {
  let path = usePathname();
  const { data: session, status } = useSession();
  function logout() {
    signOut({ callbackUrl: "/login" });
  }
  const { numOfCartItems } = useContext(CartContext);

  return (
    <>
      <nav className="bg-white dark:bg-gray-700 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <span>
              <i className="fa-solid fa-cart-shopping text-[17.5px]  text-main"></i>
            </span>
            <h1 className="self-center font-bold text-slate-600 text-2xl whitespace-nowrap dark:text-white">
              SHOPIE
            </h1>
          </Link>
          <div className="flex items-center gap-2 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {session && (
              <span className="text-gray-600 font-semibold me-2 dark:text-gray-100">
                Hi, {session.user.name}
              </span>
            )}

            {!session ? (
              <>
                <Link href="/register">
                  <button
                    type="button"
                    className="cursor-pointer text-white bg-main hover:bg-main-dark  focus:outline-none font-medium rounded-sm text-sm px-4 py-2 text-center dark:bg-main dark:hover:bg-main-dark"
                  >
                    Sign-up
                  </button>
                </Link>
                <Link href="/login">
                  <button
                    type="button"
                    className="cursor-pointer text-white bg-main hover:bg-main-dark  focus:outline-none font-medium rounded-sm text-sm px-4 py-2 text-center dark:bg-main dark:hover:bg-main-dark"
                  >
                    Login
                  </button>
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={logout}
                  type="button"
                  className="cursor-pointer text-white bg-main hover:bg-main-dark  focus:outline-none font-medium rounded-sm text-sm px-4 py-2 text-center dark:bg-main dark:hover:bg-main-dark"
                >
                  Sign-out
                </button>
              </>
            )}

            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-700 dark:border-gray-600 md:dark:bg-gray-700">
              <li>
                <Link
                  href="/"
                  className={clsx(
                    "block py-2 px-3 text-gray-500 rounded-sm  md:p-0 md:dark:hover:text-main dark:text-white  dark:hover:text-white dark:border-gray-700",
                    path === "/"
                      ? "text-white bg-main rounded-sm md:bg-transparent md:text-main md:p-0 md:dark:text-main-light"
                      : "hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-800 md:hover:text-main  md:dark:hover:bg-transparent"
                  )}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              {session && (
                <li>
                  <Link
                    href="/cart"
                    className={clsx(
                      "block py-2 px-3 relative text-gray-500 rounded-sm  md:p-0 md:dark:hover:text-main dark:text-white  dark:hover:text-white dark:border-gray-700",
                      path === "/cart"
                        ? "text-white bg-main rounded-sm md:bg-transparent md:text-main md:p-0 md:dark:text-main-light"
                        : "hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-800 md:hover:text-main  md:dark:hover:bg-transparent"
                    )}
                  >
                    Cart
                    {numOfCartItems > 0 && (
                      <span className="absolute flex size-4.5 bg-main-light text-sm text-white justify-center items-center rounded-full top-[25%] md:top-[-5] end-[-10]">
                        {numOfCartItems}
                      </span>
                    )}
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href="/products"
                  className={clsx(
                    "block py-2 px-3 text-gray-500 rounded-sm  md:p-0 md:dark:hover:text-main dark:text-white  dark:hover:text-white dark:border-gray-700",
                    path === "/products"
                      ? "text-white bg-main rounded-sm md:bg-transparent md:text-main md:p-0 md:dark:text-main-light"
                      : "hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-800 md:hover:text-main  md:dark:hover:bg-transparent"
                  )}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className={clsx(
                    "block py-2 px-3 text-gray-500 rounded-sm  md:p-0 md:dark:hover:text-main dark:text-white  dark:hover:text-white dark:border-gray-700",
                    path === "/categories"
                      ? "text-white bg-main rounded-sm md:bg-transparent md:text-main md:p-0 md:dark:text-main-light"
                      : "hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-800 md:hover:text-main  md:dark:hover:bg-transparent"
                  )}
                >
                  Categories
                </Link>
              </li>
              <li>
                <Link
                  href="/brands"
                  className={clsx(
                    "block py-2 px-3 text-gray-500 rounded-sm  md:p-0 md:dark:hover:text-main dark:text-white  dark:hover:text-white dark:border-gray-700",
                    path === "/brands"
                      ? "text-white bg-main rounded-sm md:bg-transparent md:text-main md:p-0 md:dark:text-main-light"
                      : "hover:bg-gray-100 md:hover:bg-transparent dark:hover:bg-gray-800 md:hover:text-main  md:dark:hover:bg-transparent"
                  )}
                >
                  Brands
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
