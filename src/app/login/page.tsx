"use client";
import React from "react";
import bg1 from "../../../public/images/man-with-shopping-website.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";
import axios from "axios";
import { useRouter } from "next/navigation";
import { loginSchema, loginType } from "@/schema/login.schema";
import { signIn } from "next-auth/react";

export default function Login() {
  const form = useForm<loginType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  async function handleLogin(values: loginType) {
    let response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/",
    });

    if (response?.ok) {
      toast.success("Loged in successfully!", {
        position: "top-center",
        duration: 5000,
      });
      window.location.href = "/";
    } else {
      toast.error(response?.error, {
        position: "top-center",
        duration: 5000,
      });
    }
  }

  return (
    <>
      <div className="container w-[80%] mx-auto my-12">
        <div className="flex flex-wrap items-center justify-between mt-28">
          <div className="photo w-full md:w-1/2 mb-5">
            <Image src={bg1} alt="background" priority />
          </div>
          <div className="reg-form w-full md:w-1/2 px-2 dark:text-white lg:px-14 ">
            <h2 className="text-3xl font-medium text-gray-800 dark:text-gray-100 ">
              Login
            </h2>
            <p className="mt-4 ms-1 text-gray-600 dark:text-gray-200">
              Enter your details below
            </p>
            <Form {...form}>
              <form className="mt-11" onSubmit={form.handleSubmit(handleLogin)}>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          type="email"
                          className="mt-5 dark:placeholder:text-gray-200"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="password"
                          type="password"
                          className="mt-5 dark:placeholder:text-gray-200"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <button
                  type="submit"
                  className="mt-12 cursor-pointer w-full text-white bg-main hover:bg-main-dark  focus:outline-none font-medium rounded-md text-sm px-4 py-3 text-center dark:bg-main dark:hover:bg-main-dark"
                >
                  Login
                </button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
