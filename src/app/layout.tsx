import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";

import Navbar from "@/components/Navbar/Navbar";

import navbarLinksList from "@/utils/navbarLinksList/navbarLinksList";

import "./globals.css";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Room Homepage | Brian Vitualla",
  description: "Room homepage frontend mentor challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>
        <Navbar linksList={navbarLinksList} />
        {children}
      </body>
    </html>
  );
}
