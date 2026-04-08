import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Martita's Pizza",
  description: "Martita's Pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${headingFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-(family-name:--font-body)">
        <div className="bg-slate-900">
          <div className="sticky top-0 z-10 w-full bg-olive-400 text-white justify-between flex shadow-xl">
              <div className="">
                <Image  className="-my-6" src="/martitaspizza.png" alt="Martita's Pizza" width={140} height={140}/>
              </div>
              <div className="flex items-center justify-end gap-8 pr-4 p-2">
                <Link href="/" className={`text-lg font-(family-name:--font-heading) font-black tracking-widest`}> Home</Link>
                <Link href="/" className={`text-lg font-(family-name:--font-heading) font-black tracking-widest`}> Menu</Link>
                <Link href="/" className={`text-lg font-(family-name:--font-heading) font-black tracking-widest`}> Contact Us</Link>
                <Link href="/" className={`text-lg font-(family-name:--font-heading) font-black text-olive-20 tracking-widest bg-olive-900 px-4 py-2`}> Order Now</Link>
              </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
