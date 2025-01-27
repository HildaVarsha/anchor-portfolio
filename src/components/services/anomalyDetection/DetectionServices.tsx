import { Button } from "@/components/ui";
import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Cloud services",
    description:
      "Microsoft Azure (Cognitive Services, Anomaly Detector), AWS (Sagemaker, Cloud Watch, Kinesis, Panorama, IoT Greengrass), Google Cloud (Stream Analytics, AI services)",
  },
  {
    title: "Machine learning models",
    description: "Scikit-learn, PyTorch, TensorFlow, Keras, Apache Spark MLlib",
  },
  {
    title: "Data integration, warehousing & analytics",
    description:
      "Apache NiFi, SQL Server Integration Services, Trifacta, Apache Kafka, Amazon Kinesis, PostgreSQL, MySQL, AWS Glue, Azure Data Factory",
  },
  {
    title: "Data visualization",
    description: "Kibana, Grafana, D3.js, Matplotlib, Plotly",
  },
];

const DetectionServices = () => {
  const ServiceCard = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div data-aos="fade-up">
      <p className="font-semibold">{title}</p>
      <p className="pt-6">{description}</p>
    </div>
  );
  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/detection-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Our Technology Stack for
          <span className="text-lime-500">
            {" "}
            {""} Anomaly Detection Services
          </span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          At our anomaly detection company, we leverage a blend of open-source
          and proprietary technologies—including machine learning frameworks,
          data mining tools, and application integration services—to create
          process monitoring and anomaly detection solutions tailored to your
          specific business needs.
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
          <div className="py-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <Link href={"/contact-us"}>
            <Button>Get In Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetectionServices;
