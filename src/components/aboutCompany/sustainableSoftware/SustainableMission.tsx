import { PageHeaderText } from "@/components/shared";
import React from "react";

const SustainableMission = () => {
  return (
    <div className="bg-white pt-4 lg:py-16 text-slate-800">
      <div className="lg:container px-4 mx-auto">
        <PageHeaderText label="Mission Statement" />
        <p className="py-6" data-aos="fade-up">
          Welcome to Anchor Informatics Ltd, where innovation and sustainability
          converge.
        </p>
        <p data-aos="fade-up">
          Our commitment to sustainability is reflected in every aspect of our
          business. From empowering our employees and contractors to providing
          eco-friendly solutions for our clients, we strive to minimize our
          impact on the planet.
        </p>
        <p className="py-6" data-aos="fade-up">
          Sustainability is deeply embedded in our core values, guiding each
          interaction and decision. Our team, made up of honest, respectful, and
          dedicated individuals, continuously drives innovation while
          prioritizing the environment.
        </p>
        <p data-aos="fade-up">
          We view sustainability as a shared responsibility and actively
          collaborate with our clients to build a cleaner, greener future. We
          believe that environmental stewardship requires collective effort.
        </p>
        <p className="py-6" data-aos="fade-up">
          Our commitment to sustainability encourages us to adopt eco-conscious
          practices and inspire our clients to do the same. By considering the
          environmental impact of our decisions, we integrate sustainability
          into our daily operations, aiming to foster a greener future.
        </p>
        <p data-aos="fade-up">
          When we develop software with sustainability in mind, the benefits are
          far-reaching – for businesses, individuals, and the planet alike.
        </p>
      </div>
    </div>
  );
};

export default SustainableMission;
