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
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold lg:container mx-auto"
          data-aos="fade-up"
        >
          Why partner with Anchor Informatics Ltd for
          <span className="text-lime-500">{""} AI PoC development?</span>
        </p>
      </div>
      <div className="mt-12 p-4 lg:p-12 lg:container mx-auto text-slate-800 bg-amber-100 flex flex-col lg:flex-row gap-4 lg:gap-16">
        <div data-aos="fade-up">
          <p>
            <strong>In-house R&D expertise.</strong> At Anchor Informatics Ltd,
            we have a dedicated in-house R&D team focused on driving innovation
            and excellence in AI PoC development. Our experts bring extensive
            experience in creating customized AI solutions tailored to meet the
            needs of clients across various sectors, including healthcare,
            retail, and education.
          </p>
          <p className="pt-4">
            <strong>Proven track record.</strong> With a proven track record of
            successful AI PoC projects, Anchor has demonstrated its capability
            to develop impactful AI solutions that deliver business value. We
            focus on providing tangible results that align with your business
            goals and lay the foundation for full-scale AI implementation.
          </p>
        </div>
        <div data-aos="fade-up">
          <p>
            <strong>Flexible collaboration options.</strong> Whether you need a
            dedicated team to oversee your AI PoC project or a virtual CTO for
            expert guidance, Anchor's team will integrate seamlessly with your
            organization and provide the necessary support for your success.
          </p>
          <p className="pt-4">
            <strong>Commitment to client success.</strong> At Anchor
            Informatics, your success is our top priority. We aim to foster
            long-term partnerships by delivering exceptional service and
            results. Our dedication to your success drives us to go above and
            beyond, ensuring that your AI PoC project not only meets its
            objectives but also lays the groundwork for future growth.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiProofPartner;
