import Image from "next/image";
import React from "react";

const IndustrialRetail = () => {
  return (
    <div>
      <Image
        src={"/retail-info.png"}
        alt="Retail Information"
        width={500}
        height={500}
        className="w-full"
      />
      <div className="bg-green-500 text-slate-800">
        <div
          className="px-4 md:px-0 md:max-w-2xl mx-auto py-12"
          data-aos="fade-up"
        >
          Our latest research dives into global shifts in retail, exploring what
          consumers buy, how they shop, and the lasting impact of these trends.
          At Anchor Informatics Ltd, we believe in responsible retail:
          prioritizing trust, sustainable practices, and shared values with all
          stakeholders — customers, employees, partners, investors, and the
          planet. We help retailers lead with purpose, turning values into
          competitive advantages and profitability.
        </div>
      </div>
    </div>
  );
};

export default IndustrialRetail;
