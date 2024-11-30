import Image from "next/image";
import React from "react";

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
        <div className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold  md:container">
          <p>The Technology Stack Behind </p>
          <p className="text-amber-400">Our DevOps Solutions </p>
        </div>
      </div>
      <div className="py-12">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800 grid grid-cols-2 md:grid-cols-4">
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-aws.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-azure.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-google.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-terra.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-puppet.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-docker.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-chef.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-git.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-kuber.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-swarm.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-salt.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-ansible.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devopsconfluence.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-sonarQube.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-gradle.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-vault.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-selenoid.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
          <div className="p-8 border border-gray-400 flex items-center justify-center">
            <Image
              src={"/devops-cucumber.png"}
              alt="Technology"
              width={110}
              height={50}
            />
          </div>
        </p>
      </div>
    </div>
  );
};

export default DevopsTechnology;
