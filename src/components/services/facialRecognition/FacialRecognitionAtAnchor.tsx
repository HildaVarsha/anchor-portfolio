import React from "react";

const FacialRecognitionAtAnchor = () => {
  const sections = [
    {
      title: "Requirements Analysis",
      content:
        "We start by identifying specific objectives, including environmental factors (indoor/outdoor), lighting conditions, hardware setup, and regulatory requirements. A proof of concept field test is conducted to validate your idea.",
    },
    {
      title: "Architecture Design",
      content:
        "Our developers collaborate with architects to design the system’s foundation, focusing on data capture and processing, algorithm selection, and integration needs.",
    },
    {
      title: "Data Collection",
      content:
        "We create high-quality datasets for training algorithms. When data is limited or privacy concerns arise, we apply data augmentation techniques or generate synthetic data.",
    },
    {
      title: "Model Training",
      content:
        "We iteratively train and refine the model to ensure accurate facial feature identification and database matching, optimizing performance through rigorous testing.",
    },
    {
      title: "System Integration",
      content:
        "We integrate the model with your IT systems, including CRM, ERP, and payment solutions, setting up cost-effective cloud, on-premises, or hybrid infrastructure. Expertise in edge AI is also available.",
    },
    {
      title: "Model Deployment",
      content:
        "We assist with deploying models in production environments, recommending effective deployment strategies while ensuring continuous testing, validation, and improvement.",
    },
    {
      title: "Maintenance",
      content:
        "Post-deployment, we support ongoing model improvement, integrating new data and features, and expanding the system to accommodate additional use cases.",
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
          <span className="text-amber-400"> Software Development.</span>
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
