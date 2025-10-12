"use client";
import React, { useState } from "react";
import bg1 from "../../../../public/images/download.png";
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
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";
import { checkoutSchema, checkoutType } from "@/schema/checkout.schema";
import onlinePayment from "@/PaymentActions/onlinePayment.action";
import cashPayment from "@/PaymentActions/cashPayment.action";

export default function Checkout() {
  let { id }: { id: string } = useParams();

  const [payment, setpayment] = useState("cash");
  const form = useForm<checkoutType>({
    defaultValues: {
      details: "",
      phone: "",
      city: "",
    },
    resolver: zodResolver(checkoutSchema),
  });

  async function handleCheckout(values: checkoutType) {
    if (payment === "online") {
      let res = await onlinePayment(id, values);
      if (res.status === "success") {
        window.location.href = res.session.url;
      } else {
        toast.error("Can't place order", {
          position: "top-center",
          duration: 2000,
        });
      }
    } else if (payment === "cash") {
      let res = await cashPayment(id, values);
      if (res.status === "success") {
        window.location.href = "/allorders";
        toast.success("Order placed successfully", {
          position: "top-center",
          duration: 2000,
        });
      } else {
        toast.error("Can't place order", {
          position: "top-center",
          duration: 2000,
        });
      }
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
            <h2 className="text-3xl font-medium text-gray-800 dark:text-gray-100 mt-5 ">
              Billing Details
            </h2>
            <p className="mt-4 ms-1 text-gray-600 dark:text-gray-200">
              Enter your details below
            </p>
            <Form {...form}>
              <form
                className="mt-11"
                onSubmit={form.handleSubmit(handleCheckout)}
              >
                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Address details"
                          type="text"
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
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Phone number"
                          type="tel"
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
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="City"
                          type="text"
                          className="mt-5 dark:placeholder:text-gray-200"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="mt-10 dark:text-white">
                  <RadioGroup
                    defaultValue="cash"
                    value={payment}
                    onValueChange={(value) => setpayment(value)}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <RadioGroupItem
                        className="dark:bg-white"
                        value="cash"
                        id="cash"
                      />
                      <Label
                        className="text-md font-normal text-gray-800 dark:text-white"
                        htmlFor="cash"
                      >
                        Cash on delivery
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        className="dark:bg-white"
                        value="online"
                        id="online"
                      />
                      <Label
                        className="text-md font-normal text-gray-800 dark:text-white"
                        htmlFor="online"
                      >
                        Online payment
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <button
                    type="submit"
                    className="mt-12 cursor-pointer  text-white bg-main hover:bg-main-dark  focus:outline-none font-medium rounded-sm text-sm px-4 py-3 text-center dark:bg-main dark:hover:bg-main-dark"
                  >
                    Place Order
                  </button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
