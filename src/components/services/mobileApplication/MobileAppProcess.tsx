import React from "react";
import { Button } from "../../ui";
import { ArrowRight } from "lucide-react";
const mobileAppServices = [
  {
    title: "UX/UI Design",
    description:
      "We follow user-centric design best practices to bring your vision to life, ensuring your mobile app offers an intuitive, responsive, and visually appealing experience.",
  },
  {
    title: "Front-end Development",
    description:
      "Using cutting-edge frameworks like React Native, Flutter, or Swift, we craft user experiences that engage and captivate users, ensuring your mobile app is both beautiful and functional.",
  },
  {
    title: "Back-end Development",
    description:
      "Our back-end developers create tailored, high-performance functionality that ensures your mobile app operates smoothly, handling everything behind the scenes seamlessly.",
  },
  {
    title: "API Integration",
    description:
      "We save you time by integrating third-party services through APIs, whether for payment processing, geolocation, or social media, enhancing your app’s capabilities.",
  },
  {
    title: "Web Development Consulting",
    description:
      "Our experienced consultants guide you through every phase of the mobile app development process, helping you navigate technical challenges and make informed decisions.",
  },
  {
    title: "Support & Maintenance",
    description:
      "Our experienced consultants guide you through every phase of the mobile app development process, helping you navigate technical challenges and make informed decisions.",
  },
];

const MobileAppProcess = () => {
  return (
    <div className="bg-white text-slate-800">
      <div className="py-16 px-4 md:px-0 md:container mx-auto">
        <div className="pt-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          {mobileAppServices.map((service, index) => (
            <div key={index}>
              <h3 className="font-semibold text-xl pb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <Button className="mt-4">
          Tell us your web development needs <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default MobileAppProcess;
