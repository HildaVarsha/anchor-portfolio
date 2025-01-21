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
      className={`text-2xl md:text-6xl font-semibold pb-6 z-10 ${className}`}
      data-aos="fade-up"
    >
      {label}
    </p>
  );
};

export default PageHeaderText;
