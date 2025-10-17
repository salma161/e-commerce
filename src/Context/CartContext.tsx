"use client";

import getUserCart from "@/CartActions/getUserCart.action";
import { createContext, useEffect, useState, ReactNode } from "react";

export interface CartContextType {
  numOfCartItems: number;
  setnumOfCartItems: React.Dispatch<React.SetStateAction<number>>;
  userId: string | null;
  setUserId: React.Dispatch<React.SetStateAction<string | null>>;
}


export const CartContext = createContext<CartContextType | undefined>(undefined);

interface CartContextProviderProps {
  children: ReactNode;
}

export default function CartContextProvider({ children }: CartContextProviderProps) {
  const [numOfCartItems, setnumOfCartItems] = useState<number>(0);
  const [userId, setUserId] = useState<string | null>(null);

  async function getUserCartData() {
    try {
      const res = await getUserCart();

      if (res.status === "success") {
       
        setUserId(res.data.cartOwner);
        console.log(userId, res);
        

        
        const sum = res.data.products.reduce(
          (total: number, product: any) => total + product.count,
          0
        );
        setnumOfCartItems(sum);
      }
    } catch {
      console.log("not logged in");
    }
  }

  useEffect(() => {
    getUserCartData();
  }, []);

  return (
    <CartContext.Provider
      value={{ numOfCartItems, setnumOfCartItems, userId, setUserId }}
    >
      {children}
    </CartContext.Provider>
  );
}
