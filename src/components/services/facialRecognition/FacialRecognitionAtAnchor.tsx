import React from "react";

const FacialRecognitionAtAnchor = () => {
  const sections = [
    {
      title: "Requirements Analysis",
      content:
        "We begin by identifying specific objectives, such as environmental factors (indoor/outdoor), lighting conditions, hardware setup, and regulatory needs. A proof of concept field test is conducted to validate your idea.",
    },
    {
      title: "Architecture Design",
      content:
        "Our developers collaborate with architects to design the system's foundation, focusing on data capture, algorithm selection, and integration requirements.",
    },
    {
      title: "Data Collection",
      content:
        "We gather high-quality datasets for training the algorithms. When data is scarce or privacy concerns arise, we apply data augmentation techniques or generate synthetic data.",
    },
    {
      title: "Model Training",
      content:
        "We iteratively train and refine the model to ensure accurate facial feature identification and database matching, optimizing its performance through thorough testing.",
    },
    {
      title: "System Integration",
      content:
        "We integrate the model into your IT infrastructure, including CRM, ERP, and payment systems, while setting up cost-effective cloud, on-premises, or hybrid solutions. Expertise in edge AI deployment is also available.",
    },
    {
      title: "Model Deployment",
      content:
        "We support the deployment of models in production environments, recommending the most effective strategies and ensuring continuous testing, validation, and improvement.",
    },
    {
      title: "Maintenance",
      content:
        "After deployment, we provide ongoing support for model enhancement, incorporating new data and features, and expanding the system to accommodate additional use cases.",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div
        className="h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/recognition-anchor.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Anchor’s Informative for Face Recognition
          <span className="text-lime-500"> Software Development.</span>
        </p>
      </div>
      <div className="mt-12 p-4 md:p-12 md:container mx-auto text-slate-800 bg-white flex flex-col gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="flex flex-col md:flex-row gap-4 md:gap-16 md:justify-between"
          >
            <p className="font-semibold w-full">{section.title}</p>
            <p className="w-full">{section.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacialRecognitionAtAnchor;
