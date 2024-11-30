import React from "react";

const DevopsServices = () => {
  return (
    <div className="bg-white">
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/devops-service.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold  md:container">
          <p>Our DevOps Services and </p>
          <p className="text-amber-400">Solutions</p>
        </div>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          As technology reshapes the business landscape, our DevOps consultants
          are here to transform your company&apos;s challenges into a
          competitive advantage. From CI/CD and cloud DevOps services to
          microservices, managed services, and digital platform strategies, we
          offer comprehensive DevOps consulting and implementation services to
          help you leverage new technologies effectively.
        </p>
      </div>
    </div>
  );
};

export default DevopsServices;
