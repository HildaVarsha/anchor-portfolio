import React from "react";

const PageHeaderText = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return (
    <p
      className={`text-2xl md:text-7xl font-semibold pb-6 z-10 ${className}`}
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      {label}
    </p>
  );
};

export default PageHeaderText;
