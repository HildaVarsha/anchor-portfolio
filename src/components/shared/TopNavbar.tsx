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
  const pathname: any = usePathname(); // Get the current path
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  useEffect(() => {
    if (pathname === "/about-company") return; // Only add the scroll listener for the home page
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navbarBackground =
    pathname !== "/about-company"
      ? isScrolled
        ? "bg-white text-slate-800 shadow-lg"
        : "bg-transparent"
      : "bg-white text-slate-800";
  const menus = [
    {
      title: "AI Data",
      baseUrl: "/ai-data",
      links: [
        {
          href: "/ai-data/ai-app-development",
          label: "AI App Development",
        },
        {
          href: "/ai-data/ai-dev",
          label: "AI Development",
        },
        {
          href: "/ai-data/ai-proof",
          label: "AI Proof Concept",
        },
        {
          href: "/ai-data/custom-computer",
          label: "Custom Computer Version",
        },
        {
          href: "/ai-data/facial-recognition",
          label: "Facial Recognition",
        },
        {
          href: "/ai-data/nlp",
          label: "NLP Services",
        },
        {
          href: "/ai-data/anomaly-detection",
          label: "Anomaly Detection",
        },
        {
          href: "/ai-data/machine-learning",
          label: "Machine Learning",
        },
      ],
    },
    {
      title: "Services",
      baseUrl: "/services",
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
      baseUrl: "/industries",
      links: [
        {
          href: "/industries/health-care",
          label: "Healthcare & Biotech",
        },
        { href: "/industries/logistics", label: "Logistics & Transportation" },
        {
          href: "/industries/supply-chain",
          label: "Manufacturing & Supply Chain",
        },
        { href: "/industries/media", label: "Media & Entertainment" },
        { href: "/industries/retail-industry", label: "Retail" },
        { href: "/industries/e-learning", label: "ELearning" },
        { href: "/industries/fin-tech", label: "FinTech" },
        { href: "/industries/e-commerce", label: "Ecommerce" },
        { href: "/industries", label: "About Industries" },
      ],
    },
    {
      title: "Technology",
      baseUrl: "/technologies",
      links: [
        { href: "/technologies/dot-net", label: ".Net Development" },
        { href: "/technologies/java", label: "Java Development" },
        { href: "/technologies/angular", label: "Angular Development" },
        { href: "/technologies/cto-service", label: "CTO Services" },
        {
          href: "/technologies/software-engineer",
          label: "Software Engineering",
        },
        { href: "/technologies/devops", label: "DevOps Solutions" },
      ],
    },
    {
      title: "Company",
      baseUrl: "/about-company",
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
      <ul className="flex flex-col md:flex-row md:items-center gap-4 mt-6 md:mt-0">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-lime-500" : "hover:text-lime-500"
          }`}
        >
          Home
        </Link>

        {menus?.map((menu) => (
          <NavigationMenu key={menu.title}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`p-2 hover:text-lime-500 w-full cursor-pointer flex items-center gap-2 ${
                    pathname.includes(menu.baseUrl) ? "text-lime-500" : ""
                  }`}
                >
                  {menu.title}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="rounded-none p-4 flex flex-col">
                  {menu.links.map((link) => (
                    <NavigationMenuLink
                      key={link.href}
                      className={`p-2 hover:text-lime-500 w-full cursor-pointer flex items-center gap-2 ${
                        pathname.includes(link.href) ? "text-lime-500" : ""
                      }`}
                      // className="p-2 hover:text-lime-500 w-full cursor-pointer flex items-center gap-2"
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

        <Link
          href="/career"
          className={`${
            pathname === "/career" ? "text-lime-500" : "hover:text-lime-500"
          }`}
        >
          Career
        </Link>
        <Link href={"/contact-us"}>
          <Button variant={pathname === "/contact-us" ? "default" : "outline"}>
            Contact Us
          </Button>
        </Link>
      </ul>
    );
  };
  const MobileMenu = () => {
    const handleLinkClick = () => setIsSheetOpen(false);
    return (
      <div className="flex flex-col gap-4 py-4  text-white">
        {/* Logo */}

        {/* Navigation */}
        <div className="space-y-4">
          {/* Static Links */}

          <Link
            href="/"
            className={`hover:text-lime-500 block p-2 font-semibold ${
              pathname === "/" ? "text-lime-500" : ""
            }`}
            onClick={handleLinkClick}
          >
            Home
          </Link>

          {/* Dynamic Sections */}
          {menus?.map((section) => (
            <details className="group" key={section?.title}>
              <summary className="py-2 hover:text-lime-500 cursor-pointer font-semibold flex items-center gap-2">
                <p
                  className={`p-2 w-24 hover:text-lime-500  cursor-pointer flex items-center gap-2 ${
                    pathname.includes(section.baseUrl) ? "text-lime-500" : ""
                  }`}
                >
                  {section.title}
                </p>

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
                    className="flex items-center gap-2 hover:text-lime-500"
                  >
                    <SendHorizontal className="w-4 h-4" />
                    <Link
                      href={link.href}
                      className={`p-2 hover:text-lime-500 w-full cursor-pointer flex items-center gap-2 ${
                        pathname.includes(link.href) ? "text-lime-500" : ""
                      }`}
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  </div>
                ))}
              </div>
            </details>
          ))}
          <div className="pb-8">
            <Link
              href="/career"
              onClick={handleLinkClick}
              className={` px-2 font-semibold ${
                pathname === "/career" ? "text-lime-500" : "hover:text-lime-500"
              }`}
            >
              Career
            </Link>
          </div>

          <Link href={"/contact-us"} className="mt-8" onClick={handleLinkClick}>
            <Button
              variant={pathname === "/contact-us" ? "default" : "outline"}
              className="font-semibold"
            >
              Contact Us
            </Button>
          </Link>
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
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger>
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side={"left"} className="bg-black overflow-auto p-0">
              <div className="bg-white p-3">
                <Image
                  src="/anchor-logo.png"
                  alt="Anchor Informatics Ltd Pvt Ltd"
                  width={200}
                  height={100}
                />
              </div>
              <div className="p-6">
                <MobileMenu />
              </div>
            </SheetContent>
          </Sheet>
          <Image
            src="/anchor-logo.png"
            alt="Anchor Informatics Ltd Pvt Ltd"
            width={200}
            height={100}
          />
        </div>
        {/* Logo */}
        <Image
          src="/anchor-logo.png"
          alt="Anchor Informatics Ltd Pvt Ltd"
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
