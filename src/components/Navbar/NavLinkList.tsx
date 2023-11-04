"use client";

import { Variants, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

type TNavLinkListProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  hrClassName?: string;
};

const hrVariants: Variants = {
  unHover: {
    scaleX: 0,
  },
  hover: {
    scaleX: 1,
  },
};

export default function NavLinkList({
  href,
  children,
  className,
  hrClassName,
}: TNavLinkListProps) {
  const [linkState, setLinkState] = useState<"unHover" | "hover">("unHover");

  const handleHoverStart = () => {
    setLinkState("hover");
  };

  const handleHoverEnd = () => {
    setLinkState("unHover");
  };

  return (
    <motion.li
      initial={false}
      animate={linkState}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <Link className={twMerge("font-[500] text-white", className)} href={href}>
        {children}
      </Link>
      <motion.hr
        variants={hrVariants}
        className={twMerge("mx-auto w-1/2 border border-white", hrClassName)}
      />
    </motion.li>
  );
}
