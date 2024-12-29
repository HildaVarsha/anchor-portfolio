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
  <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-16 border-b border-slate-200">
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
      title: "Recommendation systems",
      description:
        "Enhance user profiling by integrating a recommendation system into your AI app, which learns from past user behavior to predict their current preferences.",
      points: [
        "Improve customer experience with more personalized recommendations.",
        "Take your cross-selling and upselling efforts to new heights.",
        "Enhance recommendation precision",
      ],
    },
    {
      title: "Chatbots and conversational AI",
      description:
        "Design and integrate an ML and NLP-powered chatbot for human-like conversations. Whether you need a chatbot or voice assistant to automate customer responses, support fitness enthusiasts, or replace human interaction in healthcare, we’re here to assist.",
      points: [
        "Enhance engagement by understanding intent and tone.",
        "Enhance customer support, boost sales, and optimize marketing while reducing costs.",
        "Automate internal processes such as HR tasks and activities.",
        "Offer AI-powered products and services tailored to individual needs.",
      ],
    },
    {
      title: "Personalization engines",
      description:
        "Establish powerful communication with your customers. We develop AI-powered mobile apps that track user activity to deliver personalized experiences and optimize your offerings.",
      points: [
        "Engage customers effectively with precisely targeted campaigns.",
        "Tailor product descriptions.",
        "Instantly identify customers across any channel.",
        "Provide personalized products and services across industries, including healthcare and education.",
      ],
    },
    {
      title: "Computer vision solutions",
      description:
        "Leverage cutting-edge computer vision technology with our AI app development services to extract real-time insights from images and videos.",
      points: [
        "Reduce staffing costs by automating processes.",
        "Customize the user experience in education, fitness, and various other industries.",
        "Generate more precise diagnoses with medical image analysis.",
      ],
    },
    {
      title: "Predictive engines",
      description:
        "Discover data patterns, forecast trends, and predict customer behavior. Advanced ML solutions empower businesses to take proactive actions and make smarter decisions.",
      points: [
        "Retain users by analyzing their interactions with your app.",
        "Provide tailored marketing experiences.",
        "Offer better treatments to patients.",
        "Enhance supply chain management or make public transportation more intelligent.",
      ],
    },
    {
      title: "Emotion recognition",
      description:
        "Gain a deep understanding of your customers with advanced AI-powered emotion recognition. As part of our AI application development services, we integrate AI with psychological principles to create powerful emotion-detection apps for sentiment analysis and beyond.",
      points: [
        "Analyze and extract emotions from text using NLP and ML.",
        "Enhance your call centers with customer speech analysis.",
        "Analyze users&apos; responses to your content.",
        "Identify patients&apos; emotions to provide appropriate responses.",
      ],
    },
    {
      title: "AIoT",
      description:
        "Leverage advanced technology to build next-generation AI applications that work seamlessly with connected devices. By adopting AIoT, we empower companies to revolutionize entire industries, from manufacturing to healthcare.",
      points: [
        "Accelerate data analysis from your smart sensors.",
        "Extend equipment lifespan with predictive maintenance.",
        "Monitor and predict in-store customer behavior.",
        "Automatically restock inventory.",
      ],
    },
  ];

  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="AI Application Development Services that Bring Your Vision to Life" />
        <p>
          Have an app idea? There&apos;s an AI technology to bring it to life,
          and we have expertise in all of them. As a market leader in AI
          consulting and development, Anchor equips your app with intelligent
          capabilities to transform the user experience, automate processes,
          enable smarter decision-making, and drive revenue growth.
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
