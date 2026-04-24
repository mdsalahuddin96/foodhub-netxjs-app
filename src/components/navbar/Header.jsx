import Link from "next/link";
import NavLinks from "./NavLinks";
import { Button } from "@heroui/react";
const navitems = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/foods",
    text: "Foods",
  },
  {
    href: "/order",
    text: "Order",
  },
  {
    href: "/dashboard",
    text: "Dashboard",
  },
];

const Header = () => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <p className="font-bold">
            Food<span className="text-green-900">Hub</span>
          </p>
        </div>
        <ul className="flex items-center gap-4">
          {navitems.map((item, ind) => (
            <NavLinks key={ind} item={item}></NavLinks>
          ))}
        </ul>
        <div>
          <Link href="/auth/signin">
            <Button className="bg-linear-to-r from-green-900 to-green-400 text-white font-semibold p-3">
              Sign In
            </Button>
          </Link>
        </div>
      </header>
    </nav>
  );
};

export default Header;
