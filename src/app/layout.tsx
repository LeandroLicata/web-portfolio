import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const vt323 = VT323({
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
      <body className={vt323.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
