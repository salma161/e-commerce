"use client";

import getUserCart from "@/CartActions/getUserCart.action";
import { createContext, useEffect, useState, ReactNode } from "react";

// Define the type for your context
export interface CartContextType {
  numOfCartItems: number;
  setnumOfCartItems: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context with this type
export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartContextProviderProps {
  children: ReactNode;
}

export default function CartContextProvider({ children }: CartContextProviderProps) {
  const [numOfCartItems, setnumOfCartItems] = useState<number>(0);

  async function getUserCartData() {
    try {
      const res = await getUserCart();
      if (res.status === "success") {
        const sum = res.data.products.reduce(
          (total: number, product: any) => total + product.count,
          0
        );
        setnumOfCartItems(sum);
      }
    } catch {
      console.log("not login");
    }
  }

  useEffect(() => {
    getUserCartData();
  }, []);

  return (
    <CartContext.Provider value={{ numOfCartItems, setnumOfCartItems }}>
      {children}
    </CartContext.Provider>
  );
}
