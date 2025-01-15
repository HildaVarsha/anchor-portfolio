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
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../ui";
import {
  ChevronsRight,
  MenuIcon,
  SendHorizontal,
  StepForward,
} from "lucide-react";
import { Icon } from "@iconify/react/dist/iconify.js";

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
  const menus = [
    {
      title: "AI Data",
      links: [
        {
          href: "/services/ai-app-development",
          label: "AI App Development",
        },
        {
          href: "/services/ai-dev",
          label: "AI Development",
        },
        {
          href: "/services/ai-proof",
          label: "AI Proof Concept",
        },
        {
          href: "/services/custom-computer",
          label: "Custom Computer Version",
        },
        {
          href: "/services/facial-recognition",
          label: "Facial Recognition",
        },
        {
          href: "/services/nlp",
          label: "NLP Services",
        },
        {
          href: "/services/anomaly-detection",
          label: "Anomaly Detection",
        },
        {
          href: "/services/machine-learning",
          label: "Machine Learning",
        },
      ],
    },
    {
      title: "Services",
      links: [
        { href: "/services/graphic-design", label: "Graphic Design" },
        {
          href: "/services/software-development",
          label: "Software Development",
        },
        { href: "/services/hosting-service", label: "Hosting Service" },
        {
          href: "/services/digital-marketting",
          label: "Digital Marketing",
        },
        {
          href: "/services/mobile-applications",
          label: "Mobile Applications",
        },
        {
          href: "/services/web-applications",
          label: "Web Applications",
        },
        {
          href: "/services/low-code-dev",
          label: "Low Code Development",
        },
        {
          href: "/services/ui-ux",
          label: "UI/UX Development",
        },
      ],
    },

    {
      title: "Industries",
      links: [
        {
          href: "/industries/health-care",
          label: "Healthcare & Biotech",
        },
        { href: "/technologies/dot-net", label: "Logistics & Transportation" },
        {
          href: "/technologies/dot-net",
          label: "Manufacturing & Supply Chain",
        },
        { href: "/technologies/dot-net", label: "Media & Entertainment" },
        { href: "/technologies/dot-net", label: "Retail" },
        { href: "/technologies/dot-net", label: "ELearning" },
        { href: "/technologies/dot-net", label: "FinTech" },
        { href: "/technologies/dot-net", label: "Ecommerce" },
        { href: "/technologies/dot-net", label: ".Net Development" },
        { href: "/technologies/java", label: "Java Development" },
        { href: "/technologies/angular", label: "Angular Development" },
        { href: "/technologies/cto-service", label: "CTO Services" },
        {
          href: "/technologies/software-engineer",
          label: "Software Engineering",
        },
        { href: "/technologies/devops", label: "DevOps Solutions" },
        { href: "/industries", label: "About Industries" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/about-company", label: "About Company" },
        { href: "/about-company/how-we-work", label: "How We Work" },
        { href: "/about-company/careers", label: "Careers" },
        { href: "/about-company/blogs", label: "Blogs" },
        {
          href: "/about-company/sustainable-software",
          label: "Sustainable Software",
        },
      ],
    },
  ];

  const NavigationLinks = () => {
    return (
      <ul className="flex flex-col md:flex-row md:items-center gap-6 mt-6 md:mt-0">
        <Link href="/" className="hover:text-amber-400">
          Home
        </Link>

        {menus?.map((menu) => (
          <NavigationMenu key={menu.title}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-white">
                  {menu.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-none p-4 flex flex-col">
                  {menu.links.map((link) => (
                    <NavigationMenuLink
                      key={link.href}
                      className="p-2 hover:text-amber-400 w-full cursor-pointer flex items-center gap-2"
                    >
                      <ChevronsRight className="w-4 h-4" />
                      <Link href={link.href}>{link.label}</Link>
                    </NavigationMenuLink>
                  ))}
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        ))}

        <Link href="/career" className="hover:text-amber-400">
          Career
        </Link>
        <Button variant="outline">Contact Us</Button>
      </ul>
    );
  };
  const MobileMenu = () => {
    return (
      <div className="flex flex-col gap-4 py-4  text-white">
        {/* Logo */}

        {/* Navigation */}
        <div className="space-y-4">
          {/* Static Links */}

          <Link
            href="/"
            className="block py-2 hover:text-amber-500 font-semibold"
          >
            Home
          </Link>

          {/* Dynamic Sections */}
          {menus?.map((section) => (
            <details className="group" key={section?.title}>
              <summary className="py-2 hover:text-amber-500 cursor-pointer font-semibold flex items-center gap-2">
                <p className="w-20">{section.title}</p>

                <Icon
                  icon="icon-park-solid:down-one"
                  className="relative top-[1px] ml-1 h-4 w-6 transition duration-300 group-data-[state=open]:rotate-180"
                  aria-hidden="true"
                />
              </summary>

              <div className="pl-8 mt-2 space-y-6 text-sm">
                {section.links.map((link) => (
                  <div
                    key={link.href}
                    className="flex items-center gap-2 hover:text-amber-500"
                  >
                    <SendHorizontal className="w-4 h-4" />
                    <Link href={link.href} className="block text-sm">
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </details>
          ))}
          <Link
            href="/career"
            className="block py-2 hover:text-amber-500 font-semibold"
          >
            Career
          </Link>
          <Button variant="outline" className="font-semibold">
            Contact Us
          </Button>
        </div>
      </div>
    );
  };
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`fixed top-0 left-0 w-full z-50 p-4 transition-colors  ${navbarBackground}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="md:hidden flex items-center gap-4">
          <Sheet>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side={"left"} className="bg-black overflow-auto">
              <Image
                src="/logo.png"
                alt="Anchor Informatics Pvt Ltd"
                width={200}
                height={100}
              />
              <MobileMenu />
            </SheetContent>
          </Sheet>
          <Image
            src="/logo.png"
            alt="Anchor Informatics Pvt Ltd"
            width={200}
            height={100}
          />
        </div>
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Anchor Informatics Pvt Ltd"
          width={200}
          height={100}
          className="hidden md:flex"
        />
        {/* Navigation Links */}
        <div className="hidden md:flex">
          <NavigationLinks />
        </div>
      </div>
    </motion.nav>
  );
};

export default TopNavbar;
