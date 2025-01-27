import React from "react";
import { PageHeaderText } from "../shared";

const AboutVision = () => {
  const visionText = `
  Our goal is to help businesses speed up the integration of new technologies, tackle common challenges faced during digital transformation, 
  and drive ongoing innovation. Whether it’s a consumer app or a transformative enterprise solution, we manage the entire journey 
  from ideation to delivery, providing continuous support throughout.
`;

  const missionText = `
  Our mission is to deliver exceptional service to our clients, ensuring their security while offering top-tier website design 
  and development. We are committed to helping our clients promote their businesses, services, and products online, maximizing their exposure, 
  results, and benefits. With our skilled and experienced development teams, we provide the best solutions and ideas to help you expand your reach 
  and create positive change.
`;

  return (
    <div className="bg-white py-12">
      <div className="px-4 md:px-0 md:container mx-auto">
        <PageHeaderText label="Vision" className="text-slate-800" />
        <p className="text-green-500 pt-4" data-aos="fade-up">
          {visionText}
        </p>

        <div className="pt-8">
          <PageHeaderText label="Mission" className="text-slate-800" />
          <p className="text-green-500 pt-4" data-aos="fade-up">
            {missionText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
