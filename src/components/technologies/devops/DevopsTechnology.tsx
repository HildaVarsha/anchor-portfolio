import Image from "next/image";
import React from "react";

const technologies = [
  "/devops-aws.png",
  "/devops-azure.png",
  "/devops-google.png",
  "/devops-terra.png",
  "/devops-puppet.png",
  "/devops-docker.png",
  "/devops-chef.png",
  "/devops-git.png",
  "/devops-kuber.png",
  "/devops-swarm.png",
  "/devops-salt.png",
  "/devops-ansible.png",
  "/devopsconfluence.png",
  "/devops-sonarQube.png",
  "/devops-gradle.png",
  "/devops-vault.png",
  "/devops-selenoid.png",
  "/devops-cucumber.png",
];

const TechnologyCard = ({ src }: { src: string }) => (
  <div
    className="p-8 border border-gray-400 flex items-center justify-center"
    data-aos="fade-up"
  >
    <Image
      src={src}
      alt="Technology"
      width={110}
      height={50}
      data-aos="fade-up"
    />
  </div>
);

const DevopsTechnology = () => {
  return (
    <div className="bg-white">
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/devops-tech.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 lg:px-0 text-2xl lg:text-5xl mx-auto font-bold lg:container">
          <p data-aos="fade-up">The Technology Stack Behind</p>
          <p className="text-lime-500" data-aos="fade-up">
            Our DevOps Solutions
          </p>
        </div>
      </div>
      <div className="py-12">
        <div className="px-4 lg:px-0 lg:container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} src={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevopsTechnology;
