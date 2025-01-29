import Image from "next/image";
import React from "react";
import { Marquee } from "../ui/marquee";
import ImageServer from "../ImageServer";

const HomeClients = () => {
  return (
    <div className="py-16 bg-black">
      <div className="px-4 md:px-0 md:container ms-auto">
        <Marquee pauseOnHover className="[--duration:20s]">
          {[1, 2, 3, 4, 5]?.map((item: number) => {
            return (
              <div className="flex items-center gap-4 px-8" key={item}>
                <ImageServer
                  loading="lazy"
                  className="rounded-md"
                  src={
                    "https://images.pexels.com/photos/258174/pexels-photo-258174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  alt="Logo"
                  width={70}
                  height={70}
                />

                {/* <ImageServer /> */}
                <p className="font-semibold text-xl">Google Client</p>
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default HomeClients;
