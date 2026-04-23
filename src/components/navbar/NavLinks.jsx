'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLinks = ({ item }) => {
    const pathname=usePathname()
  const { href, text } = item;
  return (
    <li>
      <Link href={href} className={`gap-2.5 font-semibold ${href===pathname&&'bg-green-900 p-2 rounded-sm text-white'}`}>{text}</Link>
    </li>
  );
};

export default NavLinks;
