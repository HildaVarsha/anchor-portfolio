import React from "react";
import { PageHeaderText } from "../shared";

const AboutVision = () => {
  const visionText = `
    Our objective is to assist businesses in accelerating the adoption of 
    new technologies, resolving difficult issues that arise frequently 
    throughout digital transformation, and orchestrating continuous 
    innovation. Whether it&apos;s a consumer-facing app or a game-changing 
    enterprise-class solution, the company oversees the entire process 
    from conception to delivery and provides continuous support.
  `;

  const missionText = `
    We have a mission to provide the finest service possible to our 
    customers, to keep them safe, and to provide the greatest website 
    design and development possible. We must support our valued clients 
    in promoting their businesses, services, and products using the 
    fantastic medium of the internet in order for them to gain the most 
    exposure, results, and benefits. Our development teams are extremely 
    skilled and experienced, and they can offer the best solutions and 
    ideas. As a result, we can assist you in expanding your reach and 
    effecting positive change.
  `;

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto">
        <PageHeaderText label="Vision" className="text-slate-800" />
        <p className="text-amber-400 pt-4">{visionText}</p>

        <div className="pt-8">
          <PageHeaderText label="Mission" className="text-slate-800" />
          <p className="text-amber-400 pt-4">{missionText}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
