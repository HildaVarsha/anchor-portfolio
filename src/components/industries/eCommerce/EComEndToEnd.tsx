import React from "react";

const EComEndToEnd = () => {
  return (
    <div className="bg-white ">
      {" "}
      <div
        className="py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/e-com-end-to-end.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          End-to-end ecommerce
          <span className="text-amber-400 pl-2">
            {" "}
            software development services
          </span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          With more than a decade of experience and extensive cross-domain
          expertise, we offer a full suite of ecommerce development services to
          address your challenges no matter how big or small they are. From
          expert advice to comprehensive maintenance services, we have done it
          all, keeping our clients delighted.
        </p>
      </div>
    </div>
  );
};

export default EComEndToEnd;
