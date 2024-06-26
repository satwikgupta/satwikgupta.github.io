"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "@/data.json";

const MobileNav = () => {
  const pathname = usePathname();
  console.log(links);

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center text-[28px] text-accent ">
        <CiMenuFries />
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        <div className="mt-32 mb-36 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Satwik <span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  pathname === link.path
                    ? "text-accent font-semibold border-b-2 border-accent"
                    : "text-white"
                } text-xl capitalize block py-4 transition-all hover:text-accent`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
