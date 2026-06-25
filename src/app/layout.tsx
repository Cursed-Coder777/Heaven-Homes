import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import Navbar from "~/components/navbar";
import Footer from "~/components/footer";

export const metadata: Metadata = {
  title: "Heaven Homes",
  description: "Heaven Homes - Creative Solutions",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "800"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${outfit.variable} bg-black text-white`}
    >
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
