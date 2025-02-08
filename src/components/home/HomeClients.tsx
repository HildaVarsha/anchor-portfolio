import Image from "next/image";
import React from "react";
import { Marquee } from "../ui/marquee";
import ImageServer from "../ImageServer";

const HomeClients = () => {
  const clients = [
    {
      id: 1,
      logo: "/hsbc-logo.svg",
      name: "HSBC Bank",
    },
    {
      id: 2,
      logo: "/Lloyds-Bank-Logo.png",
      name: "Lloyd's Bank",
    },
    {
      id: 3,
      logo: "/metro-bank.png",
      name: "Metro Bank",
    },
    {
      id: 4,
      logo: "/daiwa-logo.png",
      name: "Daiwa Capital Ltd",
    },
    {
      id: 5,
      logo: "/ge-capital.png",
      name: "GE Capital Ltd",
    },
    {
      id: 6,
      logo: "/KBC-logo.svg",
      name: "KBC Bank",
    },
    {
      id: 7,
      logo: "/rabobank-logo.png",
      name: "Rabo Bank",
    },
    {
      id: 8,
      logo: "/abn-logo.png",
      name: "ABN AMRO Bank",
    },
    {
      id: 9,
      logo: "/investec-logo.png",
      name: "Investec Ltd",
    },
  ];
  return (
    <div className="py-16 bg-white text-slate-800">
      <div className="px-4 lg:px-0 lg:container mx-auto">
        <Marquee pauseOnHover className="[--duration:20s]">
          {clients?.map((item: any) => {
            return (
              <div className="flex items-center gap-4 px-8" key={item?.id}>
                <div
                  className={`${
                    item?.name == "Metro Bank" ? "bg-green-600" : ""
                  }`}
                >
                  <ImageServer
                    loading="lazy"
                    className="rounded-md"
                    src={item?.logo}
                    alt="Logo"
                    width={70}
                    height={70}
                  />
                </div>

                {/* <ImageServer /> */}
                <p className="font-semibold text-xl">{item?.name}</p>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default HomeClients;
