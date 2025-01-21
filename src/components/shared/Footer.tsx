"use client";
import React, { useEffect } from "react";
import PageHeaderText from "./PageHeaderText";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FacebookIcon,
  Instagram,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";

const Footer = () => {
  const phoneNumbers = [
    { label: "+44 7438 846089", href: "tel:+447438846089" },
    { label: "+020 3490 9639", href: "tel:+02034909639" },
  ];
  const emails = [
    {
      label: "rafi@anchorinformatics.co.uk",
      href: "mailto:rafi@anchorinformatics.co.uk",
    },
    {
      label: "info@anchorinformatics.co.uk",
      href: "mailto:info@anchorinformatics.co.uk",
    },
  ];
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1500, // Set default animation duration
      easing: "ease-in-out", // Set easing function
      once: false, // Ensures animation happens only once
    });
  }, []);
  useEffect(() => {
    AOS.refresh(); // Refresh AOS animations
  }, []);

  return (
    <div className="py-12 px-4 md:px-0 md:container mx-auto">
      <PageHeaderText
        className="text-center text-xl md:text-5xl  md:max-w-5xl mx-auto"
        label="A software development company specializing in scalable AI and data solutions that drive lasting impact."
      />
      <div className="flex flex-col md:flex-row gap-4 md:gap-16 py-4">
        <div className="flex items-center gap-4">
          <Image src={"/footer-phone.png"} alt="Phone" width={40} height={40} />
          <div className="flex flex-col gap-2">
            {phoneNumbers.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                data-aos="fade-up"
                className="text-xs md:text-sm text-white cursor-pointer"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 mt-8 md:mt-0">
          <Image src={"/footer-email.png"} alt="Phone" width={40} height={40} />
          <div className="flex flex-col gap-2">
            {emails?.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                data-aos="fade-up"
                className="text-xs md:text-sm text-white cursor-pointer"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-6">
        <p className="font-semibold text-2xl" data-aos="fade-up">
          {" "}
          Our Locations
        </p>
        <div className="pt-4 flex flex-col md:flex-row justify-between gap-4 md:gap-8">
          <div className="w-full">
            <p className="font-semibold" data-aos="fade-up">
              London
            </p>
            <p className="pt-2 text-sm" data-aos="fade-up">
              {"292-294 Plashet Grove,London,England,E6 1DQ".replace(
                /,/g,
                ", "
              )}
            </p>
          </div>
          <div className="w-full">
            <p className="font-semibold" data-aos="fade-up">
              Dubai
            </p>
            <p className="pt-2 text-sm" data-aos="fade-up">
              {"AI Saaha Offices C Old Town,Downtown Dubai Level 2 Office no.W202 PO BOX 282615,Dubai.".replace(
                /,/g,
                ", "
              )}
            </p>
          </div>
          <div className="w-full">
            <p className="font-semibold" data-aos="fade-up">
              India
            </p>
            <p className="pt-2  text-sm" data-aos="fade-up">
              {"2-48/5/6,Vyshnavi's Cynosure,Gachibowli Road,Hyderabad,Telangana 500032,India.".replace(
                /,/g,
                ", "
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full mt-8">
        <div>
          <div className="flex items-center gap-4">
            <Link
              href={"/privacy"}
              className="text-sm text-gray-500 cursor-pointer"
            >
              Privacy Policy
            </Link>
            <Link
              href={"/terms"}
              className="text-sm text-gray-500 cursor-pointer"
            >
              Terms and Conditions
            </Link>
          </div>

          <p className="text-sm text-gray-500 pt-1">
            © 2026 Anchor Informatics. All rights reserved
          </p>
        </div>
        <div className="flex items-center gap-4 mt-8 md:mt-0">
          <Link href={"/"}>
            <FacebookIcon className="w-6 h-6" />
          </Link>
          <Link href={"/"}>
            <Instagram className="w-6 h-6" />
          </Link>
          <Link href={"https://www.linkedin.com/company/anchorinformatics/"}>
            <LinkedinIcon className="w-6 h-6" />
          </Link>
          <Link href={"/"}>
            <TwitterIcon className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
