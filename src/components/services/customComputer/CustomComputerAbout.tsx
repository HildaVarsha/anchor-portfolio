import { ServicesCard } from "@/components/componentShared";
import { PageHeaderText } from "@/components/shared";
import React from "react";
const services = [
  {
    title: "Image Classification",
    description:
      "We offer a robust computer vision solution for accurate image classification tasks, such as automated image organization in apps or visual databases, visual search, content moderation, and more.",
  },
  {
    title: "Image Segmentation",
    description:
      "Our services include both semantic and instance segmentation, helping you extract detailed object information for applications like medical diagnostics, robotics, video surveillance, traffic monitoring, and beyond.",
  },
  {
    title: "Object Detection",
    description:
      "Need a high-performance object detection solution? Whether it's for crowd counting, facial recognition, video surveillance, mask detection, or anomaly detection in sectors like manufacturing, farming, or radiology, we've got you covered.",
  },
  {
    title: "Object Tracking",
    description:
      "We help companies utilize deep learning algorithms to estimate and predict the position of moving objects in video footage. Our solutions span surveillance, intelligent activity recognition, and traffic monitoring systems.",
  },
  {
    title: "Intelligent Video Analysis",
    description:
      "Our advanced video analysis technology provides solutions for video description, segmentation, summarization (including feature, event, motion/color, and object-based), and post-processing.",
  },
  {
    title: "Pose Estimation",
    description:
      "We provide expertise in interpreting human posture through deep learning, offering tailored solutions for industries such as retail, fitness, sports, gaming, and robotics.",
  },
  {
    title: "Content-based Image Retrieval (CBIR)",
    description:
      "CBIR systems analyze image content, not metadata, to enable more efficient image searches. We help you develop effective search mechanisms for your visual database to enhance retrieval capabilities.",
  },
  {
    title: "Generative Adversarial Networks (GANs)",
    description:
      "Leverage our expertise in GANs for tasks such as generating images from descriptions, restoring missing parts, upscaling images to high resolution, and adapting their domain. We specialize in data management and model training to deliver precise results.",
  },
  {
    title: "Computer Vision on the Edge",
    description:
      "We offer edge-based computer vision solutions that leverage device resources to provide low-latency, automated predictions. This empowers your business with real-time visual inspection and monitoring, improving safety and efficiency.",
  },
];

const CustomComputerAbout = () => {
  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="md:container mx-auto px-4">
        <PageHeaderText label="Our computer vision services" />
        <p data-aos="fade-up">
          Whatever computer vision challenge you face, we're likely already
          experts in it. With our deep technical expertise and a strong
          commitment to your business success, we ensure that our computer
          vision services deliver a rapid return on investment.
        </p>

        <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
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
  );
};

export default CustomComputerAbout;
