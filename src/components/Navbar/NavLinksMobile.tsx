"use client";

import { nanoid } from "nanoid";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

import CloseNavButton from "./CloseNavButton";

type TNavLinksMobileProps = {
  linksList: TLink[];
  animateState: "open" | "close";
  closeNavOnClick: React.MouseEventHandler<HTMLButtonElement>;
};

const variants: Variants = {
  close: {
    top: "-100vh",
  },
  open: {
    top: "0vh",
  },
};

export default function NavLinksMobile({
  linksList,
  animateState,
  closeNavOnClick,
}: TNavLinksMobileProps) {
  return (
    <motion.div
      initial={false}
      variants={variants}
      animate={animateState}
      className="fixed left-0 right-0 flex flex-row items-center justify-between bg-white p-12 sm:hidden"
    >
      <CloseNavButton onClick={closeNavOnClick} />

      <ul className="flex flex-row items-center justify-center gap-7">
        {linksList.map((link) => (
          <Link
            key={nanoid()}
            className="font-bold text-black"
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </motion.div>
  );
}
