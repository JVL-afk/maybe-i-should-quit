import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css"; // Assuming globals.css exists in the parent app directory

const inter = Inter({ subsets: ["latin"] });

// Metadata specific to auth pages can be added here if needed
// export const metadata: Metadata = {
//   title: "Authentication - AFFILIFY",
// };

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Auth pages might have a simpler layout, e.g., centered content without main header/footer
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-br from-orange-900 via-black to-black text-white flex items-center justify-center min-h-screen`}>
        {children}
      </body>
    </html>
  );
}

