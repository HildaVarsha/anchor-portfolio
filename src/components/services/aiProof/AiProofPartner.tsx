import React from "react";

const AiProofPartner = () => {
  return (
    <div className="bg-white py-16">
      <div
        className=" h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/ai-partner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          Why partner with Anchor Informatics for
          <span className="text-amber-400">{""} AI PoC development?</span>
        </p>
      </div>
      <div className="mt-12 p-4  md:p-12 md:container mx-auto text-slate-800 bg-amber-100 flex flex-col md:flex-row gap-4 md:gap-16">
        <div>
          <p className="">
            <strong>In-house R&D expertise.</strong> At Anchor Informatics, we
            have a dedicated in-house R&D team focused on driving innovation and
            excellence in AI PoC development. Our experts bring extensive
            experience in creating customized AI solutions tailored to the needs
            of clients across diverse sectors, including healthcare, retail, and
            education.
          </p>
          <p className="pt-4">
            <strong>Proven track record.</strong> With a proven track record of
            successful AI PoC projects, Anchor has shown its capability to
            develop impactful AI solutions that deliver business value. We focus
            on providing tangible results that align with your business goals
            and lay the foundation for full-scale AI implementation.
          </p>
        </div>
        <div>
          <p>
            <strong>Flexible collaboration options.</strong> Whether you need a
            dedicated team to oversee your AI PoC project or a virtual CTO for
            expert guidance, Anchor&apos;s team will integrate smoothly with
            your organization and offer the support necessary for your success.
          </p>
          <p className="pt-4">
            <strong>Commitment to client success. {""}</strong> At Anchor
            Informatics, your success is our foremost priority. We aim to foster
            long-term partnerships by providing outstanding service and results.
            Our dedication to your success drives us to go above and beyond,
            ensuring that your AI PoC project not only meets its goals but also
            lays the groundwork for future growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiProofPartner;
