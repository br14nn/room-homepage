import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

const leagueSpartan = League_Spartan({ subsets: ["latin"] });

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
        <Navbar
          linksList={[
            {
              label: "home",
              href: "#",
            },
            {
              label: "shop",
              href: "#",
            },
            {
              label: "about",
              href: "#",
            },
            {
              label: "contact",
              href: "#",
            },
          ]}
        />
        {children}
      </body>
    </html>
  );
}
