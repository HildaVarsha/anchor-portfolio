import React from "react";
import HireButton from "./HireButton";

const DevopsConsulting = () => {
  return (
    <div className="bg-white">
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/devops-consulting.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold  md:container">
          <p data-aos="fade-up">DevOps Consulting Services and Solutions:</p>
          <p className="text-lime-500" data-aos="fade-up">
            We truly make the difference{" "}
          </p>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="py-12  text-slate-800 px-4 md:px-0 md:container mx-auto">
          <p className="pb-8" data-aos="fade-up">
            Our tech veterans dive in and establish elite practices that you can
            own. We&apos;ve helped numerous companies foster a top-tier DevOps
            culture, and we&apos;re eager to help you do the same.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-12 bg-blue-100 p-8">
            <div>
              <p className="pb-8" data-aos="fade-up">
                <strong>Experience.</strong> With over a decade of experience
                working with companies of all sizes, our DevOps services company
                understands your unique challenges and has the expertise to
                transform your people, processes, and tools.
              </p>
              <p data-aos="fade-up">
                <strong>Expertise.</strong> Our DevOps expertise is built from
                collaborating with top industry leaders like Google, Hewlett
                Packard, and Oracle. From containers to CI/CD, clouds, IaaS,
                PaaS, and SaaS, we handle it all with professionalism.
              </p>
            </div>
            <div>
              <p className="pb-8" data-aos="fade-up">
                <strong>Tech agnostic.</strong> Our DevOps company can automate
                your CI/CD pipeline in a cloud-agnostic environment. With
                proficiency in a wide range of DevOps tools, we’ll carefully
                choose the perfect solution to meet your needs.
              </p>
              <p data-aos="fade-up">
                <strong>Proven track record.</strong> We have successfully
                completed over 600 projects and served more than 200 satisfied
                customers worldwide.
              </p>
            </div>
          </div>
          <HireButton label="Schedule a  consultation" />
        </div>
      </div>
    </div>
  );
};

export default DevopsConsulting;
