import React from "react";

const FacialRecognitionSoftware = () => {
  const services = [
    {
      title: "Fast implementation",
      description:
        "MotionMind AI provides pre-trained computer vision models that accurately detect key points on the human body, including facial landmarks. This enables faster development of facial recognition software, accelerating the technology's implementation.",
    },
    {
      title: "High precision",
      description:
        "Built on top-tier open-source and proprietary computer vision models, MotionMind AI delivers exceptional accuracy and precision in face recognition software development, ensuring the value of your investment.",
    },
    {
      title: "Lower development costs",
      description:
        "MotionMind AI eliminates the need to build computer vision models from scratch, speeding up face recognition app development and reducing time to market. The technology is compatible with any camera setup, lowering hardware costs, and can operate both on devices and in the cloud.",
    },
    {
      title: "Flexibility",
      description:
        "MotionMind AI has been successfully applied to various tasks, ranging from human pose estimation to facial recognition software development. The technology has become an integral part of our operations.",
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
          className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold lg:container mx-auto"
          data-aos="fade-up"
        >
          Computer Vision
          <span className="text-lime-500">
            {" "}
            {""} Solutions Revolutionizing Industries
          </span>
        </p>
      </div>
      <div className="py-12 bg-white">
        <div
          className="px-4 lg:px-0 lg:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          <p className="">
            While primarily an IT services company, Anchor’s Informative has
            expanded into productization with MotionMind AI—a pre-packaged,
            easily customizable computer vision solution. MotionMind AI offers
            powerful functionality, making it an ideal choice for face
            recognition software development and delivering real-world business
            benefits.
          </p>

          <div className="py-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
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
