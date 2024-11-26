import React from "react";
import Image from "next/image";

const IndustriesUtilityEnergy = () => {
  return (
    <div className="py-12 bg-white">
      <Image
        src={"/energy-transfer.png"}
        alt="Retail Information"
        width={500}
        height={500}
        className="w-full"
      />
      <div className="bg-amber-400 text-slate-800">
        <div className="px-4 md:px-0 md:max-w-2xl mx-auto py-12">
          Digital transformation is at the heart of the future for energy and
          utility companies. Anchor Informatics works with electricity, gas, and
          water providers, helping them harness digital innovation to drive
          efficiency and growth. From generation to distribution, we support our
          clients in adopting new technologies to enhance value creation,
          positioning them for long-term success.
        </div>
      </div>
    </div>
  );
};

export default IndustriesUtilityEnergy;
