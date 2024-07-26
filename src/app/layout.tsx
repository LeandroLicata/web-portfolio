import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const exo2 = Exo_2({
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
      <body className={exo2.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
