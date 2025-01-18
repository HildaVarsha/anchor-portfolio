import React from "react";

const FacialRecognitionSoftware = () => {
  const services = [
    {
      title: "Fast implementation",
      description:
        "MotionMind AI offers pre-trained computer vision models that precisely detect key points on the human body, including facial landmarks. This accelerates the development of facial recognition software, enabling faster implementation of the technology.",
    },
    {
      title: "High precision",
      description:
        "MotionMind AI is built on top-tier open-source and proprietary computer vision models, delivering exceptional accuracy and precision in face recognition software development, ensuring the value of your investment.",
    },
    {
      title: "Lower development costs",
      description:
        "MotionMind AI removes the need to build CV models from the ground up, speeding up face recognition app development and reducing time to market. Moreover, the technology is compatible with any camera setup, lowering hardware costs, and can operate on both devices and in the cloud.",
    },
    {
      title: "Flexibility",
      description:
        "We have successfully applied MotionMind AI to a range of tasks, from human pose estimation to facial recognition software development. The technology has become an integral part of our operations.",
    },
  ];
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
          backgroundImage: "url('/graphic-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Computer Vision
          <span className="text-amber-400">
            {" "}
            {""} Solutions Revolutionizing Industries
          </span>
        </p>
      </div>
      <div className="py-12 bg-white">
        <div
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          <p className="">
            While primarily an IT services company, Anchor’s Informative has
            ventured into productization with MotionMind AI - —a pre-packaged,
            MotionMind AI offers a solution well-suited for face recognition
            software development, with powerful functionality that delivers
            real-world business benefits. easily customizable computer vision
          </p>
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

export default FacialRecognitionSoftware;
