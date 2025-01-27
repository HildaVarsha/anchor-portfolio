import React from "react";

const HostingExperts = () => {
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
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold max-w-4xl"
          data-aos="fade-up"
        >
          &quot;<span className="text-lime-500">Experts guiding</span>
          you through every step of your Hosting Service journey.&quot;
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 md:px-0 md:max-w-4xl mx-auto text-slate-800"
          data-aos="fade-up"
        >
          &quot;With our full-service hosting solutions, we handle everything
          from setting up your website infrastructure to ensuring reliable,
          high-speed performance. As your trusted hosting partner, we’re here to
          address any challenges and provide seamless, secure, and scalable
          hosting tailored to support your business goals.&quot;
        </p>
      </div>
    </div>
  );
};

export default HostingExperts;
