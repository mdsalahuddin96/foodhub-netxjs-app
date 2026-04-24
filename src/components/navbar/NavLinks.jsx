'use client'
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import { usePathname } from "next/navigation";




const NavLinks = ({ item }) => {
    const pathname=usePathname()
    const {data}=useSession()
    const user=data?.user
  const { href, text } = item;
  
  if(text==='Dashboard'&& !user){
    return;
  }
  return (
    <li>
      <Link href={href} className={`gap-2.5 font-semibold ${href===pathname&&'bg-green-900 p-2 rounded-sm text-white'}`}>{text}</Link>
    </li>
  );
};

export default NavLinks;
