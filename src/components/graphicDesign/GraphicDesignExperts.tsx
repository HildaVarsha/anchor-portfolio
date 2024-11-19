import React from "react";

const GraphicDesignExperts = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-experts.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-5xl mx-auto font-bold max-w-4xl">
          &quot;<span className="text-amber-400">Experts guiding</span>
          you through every step of your digital marketing journey.&quot;
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="max-w-4xl mx-auto text-slate-800">
          With our full-service digital marketing solutions, we handle
          everything from crafting your brand&apos;s messaging to implementing
          targeted strategies across multiple channels. As your trusted
          marketing partner, we&apos;re here to address any challenges and
          deliver a seamless, high-performance marketing campaign tailored to
          your business goals.
        </p>
      </div>
    </div>
  );
};

export default GraphicDesignExperts;
