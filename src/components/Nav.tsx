"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/data.json";


const Nav = () => {
  const pathName = usePathname();
  // console.log(pathName)
  return (
    <nav className="flex gap-8">
      {links.map((link, index): JSX.Element => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${link.path === pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
