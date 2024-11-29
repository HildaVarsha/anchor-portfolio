import React from "react";
import HireButton from "./HireButton";

const AngularPartner = () => {
  return (
    <div className="bg-white pb-16">
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/dot-net-fitting.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold md:container">
          How our Angular development company
          <span className="text-amber-400">
            {" "}
            How our Angular development company can partner with you
          </span>
          .
        </p>
      </div>
      <div className="py-12  bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          We offer flexibility in meeting your Angular development needs. Our
          team can manage your project end-to-end or take on specific parts of
          it, working under either a Time & Material or fixed-price contract.
        </p>
      </div>
      <div className="px-4 md:px-0 md:container mx-auto text-slate-800 py-12">
        <div className="flex flex-col md:flex-row gap-4 md:gap-12">
          <div>
            <h1 className="font-semibold text-xl">
              In-house team augmentation
            </h1>
            <p className="pt-4">
              Strengthen your team with our skilled Angular developers to gain
              the expertise you need right now. Maintain complete transparency
              while accelerating progress on your Angular app development
              project.{" "}
            </p>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Dedicated team</h1>
            <p className="pt-4">
              For tasks requiring focused attention, we can provide a dedicated
              Angular development team fully committed to your project. Our
              teams adapt to your culture and deliver top-tier expertise to
              ensure success.
            </p>
          </div>
        </div>
        <HireButton />
      </div>
    </div>
  );
};

export default AngularPartner;
