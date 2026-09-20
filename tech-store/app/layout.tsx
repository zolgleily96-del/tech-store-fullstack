import type { Metadata } from "next";

import "./globals.css";


import Header from "./components/layout/Header";


import {
  CartProvider
} from "./context/CartContext";



export const metadata: Metadata = {
  title: "تک استور | فروشگاه تجهیزات کامپیوتری",

  description:
    "فروشگاه تخصصی پرینتر، اسکنر و تجهیزات شبکه MikroTik",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (

    <html
      lang="fa"
      dir="rtl"
      data-theme="light"
    >

      <body>


        <CartProvider>


          <Header />


          {children}


        </CartProvider>


      </body>


    </html>

  );

}