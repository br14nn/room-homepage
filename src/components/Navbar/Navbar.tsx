import Logo from "@/assets/svg/Logo";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed z-[999] flex w-full flex-row items-center gap-14 p-12 text-white">
      <Logo />

      <div className="flex flex-row items-center justify-center gap-7">
        <Link href="#">home</Link>
        <Link href="#">shop</Link>
        <Link href="#">about</Link>
        <Link href="#">contact</Link>
      </div>
    </nav>
  );
}
