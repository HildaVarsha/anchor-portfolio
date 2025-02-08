import React from "react";
import HireButton from "./HireButton";
const softwareTechnology = [
  {
    title: "Enterprise Technology",
    description:
      "The Anchor Informatics Ltd software product engineering firm is highly experienced in enterprise IT technologies. From ERP systems, CRM and help desk solutions, to document and learning management systems, HRM and project management software, as well as accounting and eProcurement tools—our expertise covers it all.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "We take pride in our AI expertise and provide a wide range of innovative software engineering services to enhance your technology systems. Partner with Anchor Informatics Ltd to develop apps with cutting-edge capabilities.",
  },
  {
    title: "Automation",
    description:
      "We have extensive experience with rule-based business process automation tools, lightweight RPA bots interacting with application interfaces, and both historical and real-time data. Leverage our software engineering services to enhance employee productivity and reduce operational costs!",
  },
  {
    title: "Big Data Analytics",
    description:
      "Anchor Informatics Ltd is a software engineering company with extensive experience in customizing SaaS business intelligence (BI) products to perfectly align with your analytics needs. Are you finding it difficult to analyze unstructured data or maintain a seamless flow of information across your IT infrastructure? Whatever your goals may be, we have the solutions to support you!",
  },
  {
    title: "Internet of Everything",
    description:
      "To enhance your data analytics and automation initiatives, we turn your assets, equipment, and even personnel into valuable data sources. We design and implement systems, cloud-based data storage and processing solutions, and user-friendly interfaces, including mobile apps and integrated voice assistants.",
  },
  {
    title: "Metaverses",
    description:
      "Leveraging our expertise in extended reality and complex solutions, we’re the ideal software engineering firm for your project—whether it’s creating Snapchat-like filters or developing a marketplace for trading NFTs.",
  },
];
const SoftwareEngineerTechnology = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="px-4 lg:px-0 lg:container py-16 mx-auto">
        <div className="pt-4 grid grid-cols-1 lg:grid-cols-3 gap-12 mb-4">
          {softwareTechnology?.map((service, index) => (
            <div key={index} data-aos="fade-up">
              <h3
                className="font-semibold text-blue-800 text-xl pb-4"
                data-aos="fade-up"
              >
                {service.title}
              </h3>
              <p data-aos="fade-up">{service.description}</p>
            </div>
          ))}
        </div>
        <HireButton />
      </div>
    </div>
  );
};

export default SoftwareEngineerTechnology;
