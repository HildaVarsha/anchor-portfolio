import React from "react";
import { PageHeaderText } from "../../shared";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const dotnetServices = [
  {
    title: ".NET consulting",
    description:
      "We will recommend the most suitable technologies for your upcoming .NET application, ensuring it meets all your functional, performance, security, and other key requirements. Additionally, we offer expert assistance in troubleshooting and resolving issues with your existing .NET-based solution.",
  },
  {
    title: "Custom .NET application development",
    description:
      "We will evaluate your business needs to design and develop a customized web, desktop, or mobile .NET application that aligns perfectly with your objectives. Additionally, we ensure seamless integration of the final solution with your existing enterprise software.",
  },
  {
    title: "Legacy .NET application modernization",
    description:
      "We can help reduce your software maintenance costs and eliminate functional limitations—such as poor integration—by upgrading your legacy application to a more modern tech stack within the .NET framework.",
  },
  {
    title: ".NET migration",
    description:
      "We will assist you in migrating your existing application to the .NET framework with a careful, strategic approach. We ensure the selection of optimal data structures and dependencies, safeguarding your data integrity and preventing any loss during the transition.",
  },
  {
    title: ".NET integration",
    description:
      "We will design and develop custom APIs to integrate your .NET solution with other platforms or custom applications, creating a seamless and fully interoperable software ecosystem.",
  },
  {
    title: ".NET application maintenance & support",
    description:
      "We will manage all aspects of your application's operation, allowing you to focus on growing your business. Our team will also handle updates and upgrades, ensuring your solution remains aligned with your evolving needs.",
  },
];

const DotNetServices = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="px-4 md:px-0 md:container py-16 mx-auto">
        <PageHeaderText label="Our .NET development services" />
        <p className="py-4 text-lg" data-aos="fade-up">
          &quot;As a .NET development company with ten years of expertise, we
          excel at delivering enterprise-grade applications that meet the unique
          needs of any industry. Our focus is on creating custom .NET solutions,
          backed by a full suite of supporting services. &quot;
        </p>
        <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-12 mb-4">
          {dotnetServices?.map((service, index) => (
            <div key={index} data-aos="fade-up">
              <h3 className="font-semibold text-xl pb-4" data-aos="fade-up">
                {service.title}
              </h3>
              <p data-aos="fade-up">{service.description}</p>
            </div>
          ))}
        </div>
        <Link href={"/contact-us"}>
          <Button className="mt-4">
            Consult on a best-fit option <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default DotNetServices;
