import Image from "next/image";
import React from "react";

const IndustriesConsumer = () => {
  return (
    <div>
      <Image
        src={"/consumer.png"}
        alt="Retail Information"
        width={500}
        height={500}
        className="w-full"
      />
      <div className="bg-amber-400 text-slate-800">
        <div className="max-w-2xl mx-auto py-12">
          In today&apos;s competitive market, companies need to meet shifting
          customer expectations while capturing new growth opportunities. Anchor
          Informatics provides end-to-end consulting services, from strategic
          planning and sales management to supply chain optimization. We help
          brands deliver customer value at the right scale, ensuring sustainable
          growth and competitive advantage.
        </div>
      </div>
    </div>
  );
};

export default IndustriesConsumer;
