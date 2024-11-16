"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-colors ${
        isScrolled ? "bg-black text-white shadow-lg" : "bg-transparent"
      }`}
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
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 w-full">
                  <NavigationMenuLink>Link</NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Link href="/" className="hover:text-amber-400">
            Industries
          </Link>
          <Link href="/" className="hover:text-amber-400">
            Company
          </Link>
          <Link href="/" className="hover:text-amber-400">
            Career
          </Link>
          <Button variant={"outline"}>Contact Us</Button>
        </ul>
      </div>
    </motion.nav>
  );
};

export default TopNavbar;
