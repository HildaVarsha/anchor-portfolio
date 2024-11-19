"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname
import {
  Button,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui";

const TopNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    if (pathname === "/about-company") return; // Only add the scroll listener for the home page
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navbarBackground =
    pathname !== "/about-company"
      ? isScrolled
        ? "bg-black text-white shadow-lg"
        : "bg-transparent"
      : "bg-black text-white";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-colors ${navbarBackground}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Anchor Informatics Pvt Ltd"
          width={200}
          height={100}
        />

        {/* Navigation Links */}
        <ul className="flex items-center gap-6">
          <Link href="/" className="hover:text-amber-400">
            Home
          </Link>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-full rounded-none p-4 flex flex-col">
                  <NavigationMenuLink className="p-2 hover:text-amber-400 w-full cursor-pointer ">
                    <Link href={"/services/graphic-design"}>
                      Graphic Design
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="p-2 hover:text-amber-400 w-full cursor-pointer boder-b border-slate-700">
                    <Link href={"/"}>Software Development</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="p-2 hover:text-amber-400 w-full cursor-pointer boder-b border-slate-700">
                    <Link href={"/"}>Hosting Service</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="p-2 hover:text-amber-400 w-full cursor-pointer boder-b border-slate-700">
                    <Link href={"/"}>Digital Marketting</Link>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="/industries" className="hover:text-amber-400">
            Industries
          </Link>
          <Link href="/about-company" className="hover:text-amber-400">
            Company
          </Link>
          <Link href="/career" className="hover:text-amber-400">
            Career
          </Link>
          <Button variant={"outline"}>Contact Us</Button>
        </ul>
      </div>
    </motion.nav>
  );
};

export default TopNavbar;
