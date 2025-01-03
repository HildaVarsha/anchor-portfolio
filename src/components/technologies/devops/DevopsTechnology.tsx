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
  <div className="p-8 border border-gray-400 flex items-center justify-center">
    <Image src={src} alt="Technology" width={110} height={50} />
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
        <div className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold md:container">
          <p>The Technology Stack Behind</p>
          <p className="text-amber-400">Our DevOps Solutions</p>
        </div>
      </div>
      <div className="py-12">
        <div className="px-4 md:px-0 md:container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <TechnologyCard key={index} src={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DevopsTechnology;
