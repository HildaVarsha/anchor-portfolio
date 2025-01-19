import { PageHeaderText } from "@/components/shared";
import React from "react";

const Section = ({
  title,
  description,
  points,
}: {
  title: string;
  description: string;
  points: string[];
}) => (
  <div
    className="py-6 flex flex-col md:flex-row gap-4 md:gap-16 border-b border-slate-200"
    data-aos="fade-up"
  >
    <p className="font-semibold text-lg w-full">{title}</p>
    <div className="w-full">
      <p>{description}</p>
      {points?.map((point: string, index: number) => (
        <p key={index} className="py-4">{`◉ ${point}`}</p>
      ))}
    </div>
  </div>
);

const AiAppAbout = () => {
  const sections = [
    {
      title: "Recommendation Systems",
      description:
        "Enhance user profiles by incorporating a recommendation system into your AI app, enabling it to learn from past behavior and predict current preferences.",
      points: [
        "Offer a more personalized experience with tailored recommendations.",
        "Boost your cross-selling and upselling efforts.",
        "Increase the accuracy of your recommendations.",
      ],
    },
    {
      title: "Chatbots and Conversational AI",
      description:
        "Create and integrate an ML and NLP-powered chatbot for realistic, human-like interactions. Whether you need a chatbot or voice assistant to automate customer service, assist fitness enthusiasts, or replace human interaction in healthcare, we’ve got you covered.",
      points: [
        "Improve engagement by recognizing intent and tone.",
        "Enhance customer support, increase sales, and optimize marketing while cutting costs.",
        "Automate internal processes such as HR functions.",
        "Offer personalized AI-powered products and services.",
      ],
    },
    {
      title: "Personalization Engines",
      description:
        "Build stronger communication with your customers. We create AI-powered mobile apps that track user behavior to provide personalized experiences and fine-tune your offerings.",
      points: [
        "Deliver targeted campaigns to engage customers effectively.",
        "Customize product descriptions based on user preferences.",
        "Instantly identify customers across various channels.",
        "Offer personalized services in industries such as healthcare and education.",
      ],
    },
    {
      title: "Computer Vision Solutions",
      description:
        "Harness state-of-the-art computer vision technology with our AI app development services to gain real-time insights from images and videos.",
      points: [
        "Cut down on staffing costs by automating processes.",
        "Customize the user experience across education, fitness, and other sectors.",
        "Enhance diagnostic accuracy through medical image analysis.",
      ],
    },
    {
      title: "Predictive Engines",
      description:
        "Uncover data patterns, predict trends, and forecast customer behavior. Our advanced ML solutions enable businesses to act proactively and make more informed decisions.",
      points: [
        "Boost user retention by analyzing app interactions.",
        "Create personalized marketing experiences.",
        "Offer more accurate treatments to patients.",
        "Optimize supply chain management or improve public transportation systems.",
      ],
    },
    {
      title: "Emotion Recognition",
      description:
        "Gain valuable insights into your customers with AI-powered emotion recognition. We combine AI with psychological principles to develop emotion-detection apps for sentiment analysis and more.",
      points: [
        "Extract and analyze emotions from text using NLP and ML.",
        "Enhance call center performance with speech emotion analysis.",
        "Evaluate user reactions to your content.",
        "Identify emotional states in patients to tailor responses appropriately.",
      ],
    },
    {
      title: "AIoT (Artificial Intelligence of Things)",
      description:
        "Integrate advanced technology to develop next-generation AI apps that seamlessly work with connected devices. Through AIoT, we enable businesses to transform industries like manufacturing and healthcare.",
      points: [
        "Speed up data analysis from smart sensors.",
        "Extend the lifespan of equipment with predictive maintenance.",
        "Analyze and predict in-store customer behavior.",
        "Automate inventory management and restocking.",
      ],
    },
  ];

  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="AI Application Development Services that Bring Your Vision to Life" />
        <p>
          Got an app idea? There's an AI solution to bring it to life, and we
          have the expertise to implement them all. As a leader in AI consulting
          and development, Anchor empowers your app with intelligent features
          that enhance user experiences, automate tasks, enable better
          decision-making, and drive business growth.
        </p>

        {sections.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            description={section.description}
            points={section.points}
          />
        ))}
      </div>
    </div>
  );
};

export default AiAppAbout;
