import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Arvo } from "next/font/google";

import Layout from '@components/layout'
const inter = Arvo ({  subsets: ['latin'],
  weight: ['400', '700'], });

export const metadata: Metadata = {
  title: "D4aonline.com",
  description: "Qatar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
         
      <body className={inter.className}>
<Layout>

        {children}
</Layout>
        </body>
    </html>
  );
}
