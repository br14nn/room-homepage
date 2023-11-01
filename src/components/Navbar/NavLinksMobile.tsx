"use client";

import { nanoid } from "nanoid";
import { motion, Variants } from "framer-motion";

import CloseNavButton from "./CloseNavButton";
import NavLinkList from "./NavLinkList";

type TNavLinksMobileProps = {
  linksList: TLink[];
  animateState: "open" | "close";
  closeNavOnClick: React.MouseEventHandler<HTMLButtonElement>;
};

const variants: Variants = {
  close: {
    top: "-20vh",
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
      className="fixed left-0 right-0 flex flex-row items-center justify-between bg-white px-6 py-12 sm:hidden sm:px-12"
    >
      <CloseNavButton onClick={closeNavOnClick} />

      <ul className="xs:gap-5 flex flex-row items-center justify-center gap-3 sm:gap-7">
        {linksList.map((link) => (
          <NavLinkList
            key={nanoid()}
            className="font-bold text-black"
            hrClassName="border-black"
            href={link.href}
          >
            {link.label}
          </NavLinkList>
        ))}
      </ul>
    </motion.div>
  );
}
