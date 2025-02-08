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
          className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold lg:container mx-auto"
          data-aos="fade-up"
        >
          End-to-end ecommerce
          <span className="text-lime-500 pl-2">
            {" "}
            software development services
          </span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 lg:px-0 lg:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          With over a decade of experience and deep cross-domain expertise, we
          provide a complete range of ecommerce development services to tackle
          challenges of any size. From expert guidance to full-scale maintenance
          services, we've successfully handled it all, ensuring our clients
          remain satisfied.
        </p>
      </div>
    </div>
  );
};

export default EComEndToEnd;
