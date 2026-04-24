'use client'
import Link from "next/link";
import NavLinks from "./NavLinks";
import { Button } from "@heroui/react";
import { signOut, useSession } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

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
  const { data } = useSession();
  const router=useRouter()
  const user = data?.user;
  console.log(user)
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
          {user ? (
            <div className="flex items-center gap-1">
              <p>{user.name.toUpperCase()}</p>
              <button className="p-1.5 rounded-lg bg-green-900 text-white" onClick={()=>{
                router.push('/')
                signOut()
              }}>Sign out</button>
            </div>
          ) : (
            <Link href="/auth/signin">
              <Button className="bg-linear-to-r from-green-900 to-green-400 text-white font-semibold p-3">
                Sign In
              </Button>
            </Link>
          )}
        </div>
      </header>
    </nav>
  );
};

export default Header;
