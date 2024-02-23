import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Glaze",
  description: "Shopping Marketplace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="relative h-full font-sans antialiased">{children}
      
      
      
      
      
      
      
      
      
      
      
      </body>
    </html>
  );
}