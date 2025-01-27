import { GetHireButton, ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import { CheckCircle } from "lucide-react";
import React from "react";

const services = [
  {
    title: "Customer analytics",
    description:
      "Leveraging AI-powered solutions, we aggregate data from various sources, including demographic and psychographic information, to gain a holistic understanding of the customer journey. This enables us to predict customer needs, identify at-risk buyers, and enhance sales and satisfaction.",
  },
  {
    title: "In-store analytics",
    description:
      "We implement advanced retail solutions to track key metrics such as visit frequency, new versus returning customers, marketing campaign effectiveness, and the influence of campaigns on shopping behavior. This helps optimize store performance, enhance customer experience, and drive sales.",
  },
  {
    title: "Sales and demand forecasting",
    description:
      "Our AI-powered analytics tools analyze historical sales, inventory, pricing data, and factors like seasonality, competitor activity, and consumer trends to forecast demand for specific SKUs. This aids in optimizing procurement, inventory management, and marketing strategies.",
  },
  {
    title: "Inventory and product assortment analysis",
    description:
      "We develop tailored retail solutions that assess historical inventory data, product assortment depth, and segment performance to better align supply and demand. This reduces stockouts, minimizes excess inventory, improves turnover, and optimizes lead times.",
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
            <span className="text-green-500 text-5xl mx-auto font-bold pl-2">
              expectations with AI-powered intelligence
            </span>
          </p>
        </div>
      </div>
      <div className="py-12 bg-green-500">
        <div
          className="px-4 md:px-0 md:container mx-auto bg-green-500 p-4 text-slate-800"
          data-aos="fade-up"
        >
          Specializing in artificial intelligence, we leverage it to build
          retail software solutions. Our retail data analytics solutions
          integrate data from various sources, including retail ERPs, CRMs,
          vendor portals, customer-facing apps, social media, and more, creating
          data ecosystems that offer a comprehensive 360-degree view of your
          customers and business operations.
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
