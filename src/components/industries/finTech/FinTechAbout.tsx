import { PageHeaderText } from "@/components/shared";
import React from "react";

const FinTechAbout = () => {
  const data = [
    {
      title: "Automation",
      items: [
        "Revenue management software",
        "Tax management software",
        "Billing and invoicing software",
        "Automated portfolio management software",
      ],
    },
    {
      title: "Data Analysis",
      items: [
        "Predictive analytics tools",
        "Customer segmentation software",
        "Market trend analysis software",
        "Sales forecasting tools",
      ],
    },
    {
      title: "AI Solutions",
      items: [
        "Natural language processing tools",
        "Image recognition software",
        "Chatbots and virtual assistants",
        "Predictive maintenance tools",
      ],
    },
    {
      title: "Cloud Services",
      items: [
        "Cloud storage solutions",
        "Cloud-based development platforms",
        "Backup and recovery tools",
        "Scalable hosting services",
      ],
    },
  ];
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="lg:container mx-auto px-4">
        <PageHeaderText label="Powerful FinTech applications to transform financial services delivery, facet by facet" />
        <p data-aos="fade-up">
          Proficient in financial software development, we craft web and mobile
          applications that change the way financial services are provisioned
          radically, securely, and for everyone. Our FinTech software solutions
          automate business processes, provide insightful analytics, make
          financial services more accessible, and guarantee top-tier security of
          financial data and operations:
        </p>
        <div className="pt-16 grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {data?.map((category, index) => (
            <div key={index} data-aos="fade-up">
              <h1 className="font-semibold text-xl pb-8" data-aos="fade-up">
                {category.title}
              </h1>
              {category.items.map((item, i) => (
                <li
                  key={i}
                  className={`${i > 0 ? "py-4" : ""}`}
                  data-aos="fade-up"
                >
                  {item}
                </li>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinTechAbout;
