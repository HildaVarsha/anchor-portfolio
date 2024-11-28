import React from "react";
import HireJavaDeveloperButton from "./HireJavaDeveloperButton";
const endtoEndDev = [
  {
    title: "Custom Java",
    description:
      "Partner with a Java team that first immerses itself in your business to create a solution tailored to your exact needs. Whether it's a simple Java application or a complex enterprise system with intricate business logic, we develop custom Java software that is highly secure, reliable, and optimized for performance.",
  },
  {
    title: "Java Web Development",
    description:
      "Leverage our deep expertise in Java frameworks such as Spring and Hibernate to build resilient, responsive web applications. Our Java development company is just a click away, ready to address all your Java web development needs.",
  },
  {
    title: "Java API Development",
    description:
      "As part of our Java development services, we can help you create robust and secure APIs to build powerful solutions, integrate essential functionality, scale Java applications, automate processes, personalize user interfaces, and much more.",
  },
  {
    title: "Enterprise Java Solutions",
    description:
      "With expertise in a wide array of Java tools, we develop, test, and deploy top-tier Java enterprise applications to drive your business. Let us help transform your operations and unlock new opportunities for growth.",
  },
  {
    title: "Java Consulting",
    description:
      "In our Java consulting services, we leverage our R&D expertise and years of hands-on experience in Java app development. We assist you in selecting the right Java technology, defining project scope, enhancing functionality, resolving performance issues, and much more.4o mini",
  },
  {
    title: "Cloud-Based Platforms",
    description:
      "We help with designing, optimizing, and deploying cloud-native Java solutions,including on kubernetes.Build a cost-effective microservices-based Java application rapidly, using our full-stack Java development services powered by our devops",
  },
  {
    title: "Migration & Integration",
    description:
      "Breathing new life into your app with the latest Java technologies can be fast and easy with the right experts by your side. Be it strategy assessment, app updates,reengineering, or data migration.Our mature java community does the best job under tight deadlines. ",
  },
  {
    title: "Maintenance & Support",
    description:
      "Ensure the seamless deployment and operation of your Java application with our customized maintenance and support services. Our certified Java engineers can handle any project, from adding new features and modules to optimization, application management, and ongoing support throughout its lifecycle.",
  },
];
const JavaEndToEndDev = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/java-end-to-end.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 md:container mx-auto">
          <p className="text-2xl md:text-5xl md:w-[600px] font-bold ">
            End-to-end Java development services to{" "}
            <span className="text-amber-400 text-2xl md:text-5xl  font-bold ">
              fulfill your needs.
            </span>
          </p>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto  text-slate-800">
          <p className="pb-6">
            Unlock the full potential of your tech investment with our Java
            development company. We don’t just deliver clean code—we tackle your
            problems with fresh insights, adaptable Java skills, and an
            unwavering commitment to your success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-6">
            {endtoEndDev?.map((tech, index) => (
              <div key={index}>
                <p className="text-2xl font-semibold">{tech.title}</p>
                <p className="py-4">{tech.description}</p>
              </div>
            ))}
          </div>
          <HireJavaDeveloperButton />
        </div>
      </div>
    </div>
  );
};

export default JavaEndToEndDev;
