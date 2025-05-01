import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Assuming globals.css exists in the app directory
import Header from "@/components/layout/header"; // Assuming Header component exists
import Footer from "@/components/layout/footer"; // Assuming Footer component exists

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AFFILIFY - AI Affiliate Marketing",
  description: "Generate high-converting affiliate websites with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-orange-900 via-black to-black text-white`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

