import React from "react";

const services = [
  {
    title: "Machine learning",
    description:
      "In our AI PoC development services, we build and rigorously test ML models for tasks such as predictive analytics, anomaly detection, and recommendations. Utilizing technologies like Scikit-learn, TensorFlow, and PyTorch, we develop initial prototypes that showcase the feasibility and potential impact of ML solutions customized to meet your business requirements.",
  },
  {
    title: "Facial recognition",
    description:
      "Our facial recognition PoC services focus on developing prototypes that identify and verify individuals using facial features. We design systems for access control, identity verification, and customer analytics, utilizing technologies such as OpenCV, Dlib, and Amazon Rekognition. These PoCs guarantee accuracy, security, and adherence to privacy regulations.",
  },
  {
    title: "Deep learning",
    description:
      "Our deep learning PoC development focuses on building prototypes powered by advanced neural networks for tasks like image and speech recognition. Anchor leverages frameworks such as TensorFlow, Keras, and PyTorch to create models that demonstrate the power of deep learning in automating complex processes and enhancing decision-making within your organization.",
  },
  {
    title: "Natural language processing",
    description:
      "Our AI PoC development team uses tools like NLTK, SpaCy, and BERT to build models for text analysis, sentiment analysis, translation tasks, and intelligent chatbots. Through PoC, we test the potential of artificial intelligence to help your company improve customer service, streamline content moderation, and enhance internal communications.",
  },
  {
    title: "Computer Vision",
    description:
      "As part of our AI PoC development, we train algorithms to effectively interpret visual data. Anchor Informatics creates initial models for image classification, object detection, and video analysis using tools like OpenCV, YOLO, TensorFlow, and Monitor MindAI, our proprietary computer vision service. Our goal is to demonstrate how AI can be applied across various industries, from security to marketing.",
  },
  {
    title: "Generative AI",
    description:
      "Our generative AI PoC development services involve creating prototypes that leverage existing data to generate new content. We utilize both proprietary and open-source foundational models, including transformers, GANs, and diffusion models. When developing Gen AI PoCs, Anchor takes into account your current and future scalability objectives, as well as the related infrastructure costs.",
  },
];
const AiProofExplore = () => {
  const ServiceCard = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div>
      <p className="font-semibold text-blue-600">{title}</p>
      <p className="pt-6">{description}</p>
    </div>
  );
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-stay.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold md:container">
          Explore our expertise in AI PoC development.
        </p>
      </div>
      <div className="py-12 bg-white text-slate-800">
        <p className="pb-6 px-4 md:px-0 md:container mx-auto">
          Having embraced AI early on, long before it became mainstream, Anchor
          has gained extensive expertise across various AI types and subsets. We
          leverage this knowledge to tackle real-world challenges that arise
          during AI PoC development.
        </p>
        <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
          <div className="py-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiProofExplore;
