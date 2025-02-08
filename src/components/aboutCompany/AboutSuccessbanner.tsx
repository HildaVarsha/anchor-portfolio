import React from "react";
import { PageHeaderText } from "../shared";

const AboutSuccessbanner = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3651632/pexels-photo-3651632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="py-12 h-[400px]"
    >
      <div className="px-4 lg:px-0 lg:container mx-auto flex flex-col items-center justify-center h-full">
        <PageHeaderText
          label="We are hungrrrrry
"
        />
        <p
          className="text-2xl lg:text-5xl font-semibold text-lime-500"
          data-aos="fade-up"
        >
          for your success
        </p>
      </div>
    </div>
  );
};

export default AboutSuccessbanner;
