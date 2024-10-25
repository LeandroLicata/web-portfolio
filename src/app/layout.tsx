import type { Metadata } from "next";
import { Exo_2, Press_Start_2P, VT323, Rubik_Mono_One, Space_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const exo2 = Exo_2({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const pressStart2p = VT323({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Leandro Licata Portfolio",
  description: "Portfolio web de Lendro Licata Full Stack Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={pressStart2p.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
