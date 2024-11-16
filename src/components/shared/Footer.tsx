import React from "react";
import PageHeaderText from "./PageHeaderText";
import Image from "next/image";
import Link from "next/link";

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
      label: "contact@anchorinformatics.co.uk",
      href: "mailto:contact@anchorinformatics.co.uk",
    },
  ];
  return (
    <div className="py-12 container mx-auto">
      <PageHeaderText
        className="text-center max-w-lg mx-auto"
        label="A software development company specializing in scalable AI and data solutions that drive lasting impact."
      />
      <div className="flex items-center gap-4">
        <Image src={"/footer-phone.png"} alt="Phone" width={40} height={40} />
        <div className="flex flex-col gap-2">
          {phoneNumbers.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-xs md:text-sm text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <Image src={"/footer-email.png"} alt="Phone" width={40} height={40} />
        <div className="flex flex-col gap-2">
          {emails?.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-xs md:text-sm text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full mt-8">
        <div>
          <Link href={"/"} className="text-sm text-gray-500">
            Privacy Policy
          </Link>
          <p className="text-sm text-gray-500 pt-1">©2026 Anchor Infromatics</p>
        </div>
        <div className="flex items-center gap-4">
          <Image src={"/facebook.png"} alt="Face book" height={20} width={10} />
          <Image
            src={"/instagram.png"}
            alt="Instagram"
            height={20}
            width={20}
          />
          <Image src={"/linkedin.png"} alt="Linked In" height={20} width={20} />
          <Image src={"/twitter.png"} alt="Twitter" height={20} width={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
