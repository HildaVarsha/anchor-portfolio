import React from "react";

const SupplyChainTransformation = () => {
  return (
    <div className="bg-white py-16">
      <div
        className=" h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/computer-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Why entrust your digital transformation
          <span className="text-lime-500">{""} project to ITRex?</span>
        </p>
      </div>
      <div className="mt-12 p-4 md:p-12 md:container mx-auto text-slate-800 bg-amber-100 flex flex-col md:flex-row gap-4 md:gap-16">
        <div>
          <p className="" data-aos="fade-up">
            <strong>We are vendor-neutral.</strong> {""} ITRex utilizes a mix of
            proprietary, open-source, and SaaS-based technologies to prevent
            vendor lock-in when crafting IT solutions for supply chain and
            manufacturing businesses. This approach ensures the systems we
            create are scalable and adaptable to your changing needs.
          </p>
          <p className="pt-8" data-aos="fade-up">
            <strong>We are flexible.</strong> {""} In our projects, we follow a
            “start small, think big” strategy, breaking down complex systems
            into manageable parts and implementing them step by step while
            keeping the bigger vision in mind. We continuously gather feedback
            from stakeholders to refine and optimize the IT solutions.
          </p>
        </div>
        <div>
          <p data-aos="fade-up">
            <strong>We value innovation.</strong> {""} With an in-house R&D team
            and numerous ambitious projects behind us, the ITRex team is ahead
            of the curve in mastering emerging technologies before they become
            mainstream. From rapid prototyping to exploring generative AI, we’re
            dedicated to helping our clients adopt cutting-edge technologies
            quickly, cost-effectively, and with greater ROI.
          </p>
          <p className="pt-8" data-aos="fade-up">
            <strong>We are ITRex.</strong> {""} Founded in 2009 as a custom
            software engineering company, we have evolved into a one-stop
            destination for advanced AI, data, IoT, and automation solutions.
            Our global team of 270 professionals is ready to take on your
            challenges and transform them into success stories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainTransformation;
