"use client";

import { useState } from "react";

import Logo from "@/assets/svg/Logo";
import OpenNavButton from "./OpenNavButton";
import NavLinksDesktop from "./NavLinksDesktop";
import NavLinksMobile from "./NavLinksMobile";

type TNavbarProps = {
  linksList: TLink[];
};

export default function Navbar({ linksList }: TNavbarProps) {
  const [animateState, setAnimateState] = useState<"open" | "close">("close");

  const handleOpenNav = () => {
    animateState === "close" && setAnimateState("open");
  };

  const handleCloseNav = () => {
    animateState === "open" && setAnimateState("close");
  };

  return (
    <>
      {animateState === "open" && (
        <div
          className="fixed inset-0 z-[998] h-screen w-screen bg-black/50 sm:hidden"
          onClick={handleCloseNav}
        />
      )}
      <nav className="fixed z-[999] flex w-full flex-row items-center justify-between gap-14 p-12 text-white sm:justify-normal">
        <OpenNavButton onClick={handleOpenNav} />
        <Logo />
        <div className="block w-[20px] sm:hidden" />

        <NavLinksDesktop linksList={linksList} />
        <NavLinksMobile
          animateState={animateState}
          closeNavOnClick={handleCloseNav}
          linksList={linksList}
        />
      </nav>
    </>
  );
}
