import { textBase } from "@/utils/typography/fontSizes";
import { nanoid } from "nanoid";
import NavLinkList from "./NavLinkList";

type TNavLinksDesktopProps = {
  linksList: TLink[];
};

export default function NavLinksDesktop({ linksList }: TNavLinksDesktopProps) {
  return (
    <ul
      className={`${textBase} hidden flex-row items-center justify-center gap-7 sm:flex`}
    >
      {linksList.map((link) => (
        <NavLinkList key={nanoid()} href={link.href}>
          {link.label}
        </NavLinkList>
      ))}
    </ul>
  );
}
