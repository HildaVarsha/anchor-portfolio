import React from "react";

const NlpIndustry = () => {
  const sections = [
    {
      title: "Ecommerce",
      content:
        "Improve search accuracy and recommend products your customers will love, based on their interests and previous actions.",
    },
    {
      title: "Customer Support Chatbots",
      content:
        "Automate responses to basic queries and route more complex ones to the right person, reducing support costs.",
    },
    {
      title: "Healthcare",
      content:
        "Improve patient care by analyzing their records to uncover underlying issues and detect potential health problems early.",
    },
    {
      title: "Pharmaceuticals",
      content:
        "Boost research capabilities by automatically extracting key insights from research reports, clinical trials, and electronic health records (EHRs).",
    },
    {
      title: "Finance",
      content:
        "Automate the processing of financial reports and statements to identify risks, fraud, and potential compliance issues.",
    },
    {
      title: "Legal Documentation",
      content:
        "Simplify contract management by automatically extracting key information and detecting potential issues in your documents.",
    },
    {
      title: "Real Estate",
      content:
        "Utilize our natural language processing services to analyze real estate listings and preferences, making it easier to find the ideal property.",
    },
    {
      title: "Education",
      content:
        "Automatically assess students' work and provide feedback to improve learning outcomes while reducing manual effort.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div
        className="h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/graphic-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold lg:container mx-auto"
          data-aos="fade-up"
        >
          We create tailored
          <span className="text-lime-500">
            {" "}
            NLP solutions for your industry.
          </span>
        </p>
      </div>
      <div className="py-12 bg-lime-500 ">
        <p
          className="px-4 lg:px-0 lg:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          We work closely with you to understand your business challenge and
          deliver a natural language processing solution that provides the most
          efficient results.
        </p>
      </div>
      <div className="mt-12 px-4 lg:px-0 lg:p-12 lg:container mx-auto text-slate-800 bg-white flex flex-col gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="flex flex-col lg:flex-row gap-4 lg:gap-16 lg:justify-between"
          >
            <p className="font-semibold w-full" data-aos="fade-up">
              {section.title}
            </p>
            <p className="w-full" data-aos="fade-up">
              {section.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NlpIndustry;
