import { PageHeaderText } from "@/components/shared";
import React from "react";
const services = [
  {
    title: "Image Classification",
    description:
      "Looking for highly accurate image classification? We offer a robust computer vision solution for tasks such as automated image organization in apps or visual databases, visual search, content moderation, and more.",
  },
  {
    title: "Image Segmentation",
    description:
      "Semantic and instance segmentation are also integral parts of our computer vision services. We assist in extracting detailed object information, whether for medical diagnostics, robotics, video surveillance, traffic monitoring, or other applications.",
  },
  {
    title: "Object Detection",
    description:
      "Are you looking to create a high-performance object detection solution for crowd counting, facial recognition, video surveillance, mask detection, or anomaly detection in sectors like manufacturing, farming, or radiology? Our computer vision developers are ready to deliver.",
  },
  {
    title: "Object Tracking",
    description:
      "We assist companies in utilizing deep learning algorithms to estimate and predict the position of moving objects in video footage. Whether it's for surveillance solutions, intelligent activity recognition systems, or traffic monitoring systems, we have successfully handled it all.",
  },
  {
    title: "Intelligent Video Analysis",
    description:
      "As part of our computer vision services, we provide advanced video analysis technology for tasks such as video description, segmentation, summarization (including feature, event, motion/color, and object-based), and post-processing.",
  },
  {
    title: "Pose Estimation",
    description:
      "Leverage our computer vision services to select the most suitable approach and library for interpreting human posture using deep learning. Whether you're in retail, fitness, sports, gaming, or robotics, we'll help bring your vision to life.",
  },
  {
    title: "Content-based Image Retrievaln",
    description:
      "CBIR systems search images by analyzing their content instead of relying on metadata. If you need expert assistance in developing an effective search mechanism for your visual database, we’re just a click away.",
  },
  {
    title: "Generative Adversarial Networks",
    description:
      "Leverage our expertise in using GANs for tasks such as generating images from descriptions, restoring missing parts, upscaling images to high resolution, and adapting their domain. We have the knowledge to manage data and train models to deliver precise results.",
  },
  {
    title: "Computer Vision on the Edge",
    description:
      "Anchor offers computer vision solutions that leverage device resources to deliver low-latency automated predictions, empowering your business. If you need to automate monitoring or visual inspection tasks for improved safety and efficiency, feel free to reach out.",
  },
];

const CustomComputerAbout = () => {
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
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="Our computer vision services" />
        <p>
          Whatever computer vision challenge you encounter, we&apos;re likely
          already well-versed in it. We have the technical expertise, but
          there&apos;s more to it. As your partner, we are committed to your
          business success, ensuring that our computer vision services deliver a
          quick return on investment.
        </p>
        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
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
  );
};

export default CustomComputerAbout;
