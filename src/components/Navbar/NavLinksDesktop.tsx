import { nanoid } from "nanoid";
import Link from "next/link";

type TNavLinksDesktopProps = {
  linksList: TLink[];
};

export default function NavLinksDesktop({ linksList }: TNavLinksDesktopProps) {
  return (
    <div className="hidden flex-row items-center justify-center gap-7 sm:flex">
      {linksList.map((link) => (
        <Link key={nanoid()} className="font-bold text-white" href={link.href}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}
