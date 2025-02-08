import { ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "Machine Learning",
    description:
      "In our AI PoC development services, we build and rigorously test ML models for tasks such as predictive analytics, anomaly detection, and recommendations. By leveraging technologies like Scikit-learn, TensorFlow, and PyTorch, we develop prototypes that demonstrate the feasibility and potential impact of ML solutions, customized to meet your business requirements.",
  },
  {
    title: "Facial Recognition",
    description:
      "Our facial recognition PoC services focus on developing prototypes that identify and verify individuals using facial features. We design systems for access control, identity verification, and customer analytics, utilizing technologies such as OpenCV, Dlib, and Amazon Rekognition. These PoCs ensure accuracy, security, and compliance with privacy regulations.",
  },
  {
    title: "Deep Learning",
    description:
      "Our deep learning PoC development specializes in building prototypes powered by advanced neural networks for tasks like image and speech recognition. We use frameworks like TensorFlow, Keras, and PyTorch to create models that showcase the power of deep learning in automating complex processes and enhancing decision-making within your organization.",
  },
  {
    title: "Natural Language Processing",
    description:
      "Our AI PoC development team employs tools like NLTK, SpaCy, and BERT to build models for text analysis, sentiment analysis, translation tasks, and intelligent chatbots. Through PoCs, we test the potential of AI to help improve customer service, streamline content moderation, and enhance internal communications.",
  },
  {
    title: "Computer Vision",
    description:
      "As part of our AI PoC development, we train algorithms to effectively interpret visual data. Anchor Informatics Ltd creates initial models for image classification, object detection, and video analysis using tools like OpenCV, YOLO, TensorFlow, and Monitor MindAI—our proprietary computer vision service. These PoCs demonstrate how AI can be applied across industries like security, marketing, and more.",
  },
  {
    title: "Generative AI",
    description:
      "Our generative AI PoC development services involve creating prototypes that leverage existing data to generate new content. We use both proprietary and open-source foundational models, including transformers, GANs, and diffusion models. When developing Gen AI PoCs, Anchor considers your current and future scalability objectives, as well as the infrastructure costs involved.",
  },
];

const AiProofExplore = () => {
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
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl mx-auto font-bold lg:container"
          data-aos="fade-up"
        >
          Explore our expertise in AI PoC development.
        </p>
      </div>
      <div className="py-12 bg-white text-slate-800">
        <p
          className="pb-6 px-4 lg:px-0 lg:container mx-auto"
          data-aos="fade-up"
        >
          Having embraced AI long before it became mainstream, Anchor has
          acquired extensive expertise across various AI types and subsets. We
          apply this deep knowledge to address real-world challenges that emerge
          during AI PoC development.
        </p>

        <div className="px-4 lg:px-0 lg:container mx-auto text-slate-800">
          <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            {services.map((service, index) => (
              <ServicesCard
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
