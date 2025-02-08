import { Button } from "@/components/ui";
import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Custom NLP Solutions",
    description:
      "Don’t settle for generic solutions. Our custom NLP solutions are tailored to meet your unique needs, combining pre-built and bespoke models with advanced tools for seamless integration into your existing systems.",
  },
  {
    title: "Model Selection and Optimization",
    description:
      "Choosing the right NLP model and optimizing hyperparameters can be a challenge. With our expertise, we guide you through the selection process. Additionally, we can train a custom language model and fine-tune it using your data.",
  },
  {
    title: "NLP Consulting and Strategy",
    description:
      "Get expert guidance from our consultants on discovering untapped NLP opportunities within your organization, researching efficient model training methods, evaluating your current NLP solutions, and crafting a roadmap for successful NLP adoption.",
  },
  {
    title: "NLP App Development",
    description:
      "Anchor’s team of skilled product designers and developers can help you build an outstanding NLP application tailored to your needs—whether it’s a conversational AI chatbot for customer support, an advanced search system, a language translation app, or a text processing solution.",
  },
  {
    title: "NLP Integration",
    description:
      "Seamlessly integrate custom NLP features into your systems with Anchor's NLP services. Our experts can help you overcome legacy system challenges and create tailored APIs, database integrations, and more.",
  },
  {
    title: "Data Collection and Annotation",
    description:
      "Gather the data needed to train your language-based ML models and digital assistants. From text and speech collection to industry-specific database cleaning, our efficient workflows guarantee high-quality results at a cost-effective price.",
  },
  {
    title: "Ongoing Maintenance and Updates",
    description:
      "Keep your NLP models accurate and efficient with our continuous maintenance and retraining services, ensuring that your models stay aligned with the evolving needs of your business.",
  },
  {
    title: "Generative AI Implementation",
    description:
      "Anchor’s team of skilled product designers and developers can assist in building an exceptional NLP application tailored to your needs—whether it's a conversational AI chatbot for customer support, an advanced search system, a language translation app, or a text processing solution.",
  },
];

const NlpOverview = () => {
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
          backgroundImage: "url('/ai-partner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold lg:container mx-auto"
          data-aos="fade-up"
        >
          An Overview of Anchor&apos;s Informative
          <span className="text-lime-500"> {""} NLP Services</span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 lg:px-0 lg:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Whether you&apos;re new to NLP or have extensive experience, our team
          of AI development experts stays at the cutting edge of technology to
          provide the best solutions. We specialize in tackling critical
          challenges such as data security and governance, creating a compelling
          business case for NLP projects, and ensuring the accuracy and quality
          needed to deploy models into production.
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="px-4 lg:px-0 lg:container mx-auto text-slate-800">
          <div className="py-6 grid grid-cols-1 lg:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <Link href={"/contact-us"} data-aos="fade-up">
            <Button>Get In Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NlpOverview;
