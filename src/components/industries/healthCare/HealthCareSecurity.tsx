import React from "react";

const HealthcareSecurity = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/ai-app-expertise.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Healthcare software security standards
          <span className="text-amber-400 ml-2">
            and certifications we work with
          </span>
        </p>
      </div>
      <div className="py-12 bg-white">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Our clients’ data privacy, security, and compliance are a priority for
          us. So, as a top medical software development company, we:
        </p>
        <div className="p-8 md:container mx-auto bg-blue-100 my-12 text-slate-800 flex flex-col md:flex-row gap-4 md:gap-16">
          <div className="w-full">
            <li data-aos="fade-up">
              Comply with industry standards, including HIPAA, GDPR, HITECH,
              HL7, and FHIR
            </li>
            <li className="pt-4" data-aos="fade-up">
              Adhere to the established software development security standards
              and frameworks, such as OWASP and OWASP SAMM
            </li>
          </div>
          <div className="w-full">
            <li data-aos="fade-up">
              Work with major healthcare coding styles like ICPC-2, DICOM, CPT,
              and ICD-10
            </li>
            <li className="pt-4" data-aos="fade-up">
              Comply with payment processing standards, such as PCI DSS
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareSecurity;
