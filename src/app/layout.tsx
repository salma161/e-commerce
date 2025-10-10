import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import Navbar from "./_components/navbar/Navbar";
import { Toaster } from "@/components/ui/sonner";
import MySessionProvider from "@/MySessionProvider/MySessionProvider";
import CartContextProvider from "@/Context/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shopie",
  description: "Shopie for shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark:!bg-gray-800`}
      >
        <MySessionProvider>
          <CartContextProvider>
            <Navbar />
            <Toaster />
            {children}
          </CartContextProvider>
        </MySessionProvider>

        <script src="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.js"></script>
      </body>
    </html>
  );
}
