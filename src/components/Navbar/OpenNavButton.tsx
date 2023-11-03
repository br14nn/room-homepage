"use client";

import { twMerge } from "tailwind-merge";
import HambugerIcon from "@/components/Navbar/HambugerIcon";

type TOpenNavButtonProps = {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export default function OpenNavButton({
  className,
  onClick,
}: TOpenNavButtonProps) {
  return (
    <button className={twMerge("block sm:hidden", className)} onClick={onClick}>
      <HambugerIcon />
    </button>
  );
}
