import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/navBar";
import Offer from "@/components/offer";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Shop.co",
  description: "The Best Online Shopping Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white font-satoshi flex flex-col items-center">
        <NavBar />
        {children}
        <Offer />
        <Footer />
      </body>
    </html>
  );
}
