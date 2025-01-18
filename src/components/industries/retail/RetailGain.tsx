import { GetHireButton, ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import { CheckCircle } from "lucide-react";
import React from "react";

const services = [
  {
    title: "Customer analytics",
    description:
      "AI-powered solutions that draw in data from siloed data sets and external information on demographics, psychographics, and more to create a complete understanding of the customer experience, anticipate customer needs, incept at-risk buyers, and increase sales and customer satisfaction.",
  },
  {
    title: "In-store analytics",
    description:
      "We implement intelligent retail solutions that allow measuring the number of visits, the share of new versus known customers, the effectiveness of marketing campaigns and their influence on shopping behavior, and more to increase shop performance, optimize customer experience, and drive sales.",
  },
  {
    title: "Sales and demand forecasting",
    description:
      "AI-powered analytics tools that allow analyzing historical sales, inventory, and pricing data against seasonality, competitor activity, consumer trends, special events, and other factors in order to predict demand for specific SKUs and optimize procurement, inventory management, and marketing strategies.",
  },
  {
    title: "Inventory and product assortment analysis",
    description:
      "We develop custom retail solutions that analyze historical inventory data, assortment depth, and product segments to align supply and demand, increase inventory turnover, reduce inventory holding costs, improve stock availability and lead times, and minimize the risk of overstocking and stock-outs.",
  },
];

const RetailGain = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/retail-gain.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 md:container mx-auto">
          <p
            className="text-5xl mx-auto font-bold container"
            data-aos="fade-up"
          >
            Gain efficiency and exceed customer
            <span className="text-amber-400 text-5xl mx-auto font-bold pl-2">
              expectations with AI-powered intelligence
            </span>
          </p>
        </div>
      </div>
      <div className="py-12 bg-amber-400">
        <div
          className="px-4 md:px-0 md:container mx-auto bg-amber-400 p-4 text-slate-800"
          data-aos="fade-up"
        >
          Specializing in artificial intelligence, we put it to use when
          developing software solutions for retail. Our retail data analytics
          solutions merge data from retail ERPs, CRMs, vendor portals,
          customer-facing mobile apps, social media, and other sources to create
          data ecosystems that provide a 360-degree look into your customers and
          business operations.
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-12 text-slate-800">
          {services?.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
          <GetHireButton />
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="p-12  md:container mx-auto text-slate-800 bg-amber-100">
          <PageHeaderText label="ITRex — retail software development company you can trust" />
          <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-16">
            <div className="w-full">
              <div className="flex  gap-4">
                <CheckCircle className="w-20 h-20 pr-1" data-aos="fade-up" />
                <p data-aos="fade-up">
                  We have hands-on experience creating cyber-physical systems
                  and embedded software for smart retail equipment, including
                  beacon-powered systems, surveillance cameras, digital signage,
                  and checkout-free solutions.
                </p>
              </div>
              <div className="flex gap-4 pt-12">
                <CheckCircle className="w-20 h-20 pr-1" data-aos="fade-up" />
                <p data-aos="fade-up">
                  We have ten years of experience delivering retail software
                  development services and full-stack capabilities in place,
                  including web, mobile, cloud, and embedded systems
                  development, to back up digital transformation in retail.
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-4">
                <CheckCircle className="w-20 h-20 pr-1" data-aos="fade-up" />
                <p data-aos="fade-up">
                  We are well-versed in building complete data ecosystems —
                  including AI-powered ones — that provide a 360-degree view
                  into a company’s operations for global retail brands.
                </p>
              </div>
              <div className="flex  gap-4 pt-12">
                <CheckCircle className="w-20 h-20 pr-1" data-aos="fade-up" />
                <p data-aos="fade-up">
                  We follow retail software development best practices and set
                  up all the necessary data security practices to ensure that
                  our retail solutions comply with PCI DSS, GDPR, and relevant
                  local regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailGain;
