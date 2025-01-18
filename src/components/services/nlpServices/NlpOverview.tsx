import { Button } from "@/components/ui";
import Link from "next/link";
import React from "react";

const services = [
  {
    title: "Custom NLP Solutions",
    description:
      "Don’t settle for generic solutions that fall short. Our custom NLP solutions are designed to meet your unique needs, blending pre-built and tailored models with advanced tools for smooth integration into your existing systems.",
  },
  {
    title: "Model Selection and Optimization",
    description:
      "Selecting the right NLP model and optimizing hyperparameters can be challenging. With our expertise, we can guide you through the process. Additionally, we can train a custom language model and fine-tune it using your data..",
  },
  {
    title: "NLP Consulting and Strategy",
    description:
      "Receive expert guidance from our consultants, from identifying untapped NLP opportunities within your organization to researching efficient model training, evaluating your current NLP solutions, and developing a roadmap for successful NLP adoption.",
  },
  {
    title: "NLP App Development",
    description:
      "The Anchor’s informative team of skilled product designers and developers can assist you in building an exceptional NLP application tailored to your needs—whether it's a conversational AI chatbot for customer support, an advanced search system, a language translation app, or a text processing solution.",
  },
  {
    title: "NLP Integration",
    description:
      "Easily incorporate custom NLP features into your systems with Anchor's NLP services. Our experts can assist you in overcoming legacy system challenges and creating tailored APIs, database integrations, and more.",
  },
  {
    title: "Data Collection and Annotation",
    description:
      "Obtain the data you need to train your language-based ML models and digital assistants. From text and speech collection to industry-specific database cleaning, our efficient workflows ensure high-quality results at a cost-effective price.",
  },
  {
    title: "Ongoing Maintenance and Updates",
    description:
      "Ensure your NLP models remain accurate and efficient with our natural language processing services. We provide continuous maintenance and retraining to help you stay ahead of the evolving needs of your business.",
  },
  {
    title: "Generative AI Implementation",
    description:
      "The Anchor Informative team of skilled product designers and developers can assist you in building an exceptional NLP application tailored to your needs—whether it's a conversational AI chatbot for customer support, an advanced search system, a language translation app, or a text processing solution.",
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
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          An Overview of Anchor&apos;s Informative
          <span className="text-amber-400"> {""} NLP Services</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Whether you&apos;re new to NLP or have extensive experience, our team
          of AI development experts stays at the forefront of technology to
          deliver the best solutions. We specialize in overcoming key challenges
          such as data security and governance, building a solid business case
          for NLP projects, and ensuring the accuracy and quality required to
          deploy models into production.
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
          <Link href={"/contact-us"} data-aos="fade-up">
            <Button>Get In Touch</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NlpOverview;
