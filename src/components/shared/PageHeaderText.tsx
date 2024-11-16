import React from "react";

const PageHeaderText = ({
  label,
  className,
}: {
  label: string;
  className?: string;
}) => {
  return <p className={`text-3xl font-semibold pb-6 ${className}`}>{label}</p>;
};

export default PageHeaderText;
