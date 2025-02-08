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
          className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold lg:container mx-auto"
          data-aos="fade-up"
        >
          Healthcare software security standards
          <span className="text-lime-500 ml-2">
            and certifications we work with
          </span>
        </p>
      </div>
      <div className="py-12 bg-white">
        <p
          className="px-4 lg:px-0 lg:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          At ITRex, safeguarding our clients' data privacy, security, and
          compliance is a top priority. As a leading medical software
          development company, we ensure:
        </p>
        <div className="p-8 lg:container mx-auto bg-blue-100 my-12 text-slate-800 flex flex-col lg:flex-row gap-4 lg:gap-16">
          <div className="w-full">
            <ul>
              <li data-aos="fade-up">
                Full compliance with industry standards such as HIPAA, GDPR,
                HITECH, HL7, and FHIR
              </li>
              <li className="pt-4" data-aos="fade-up">
                Adherence to established software development security
                frameworks, including OWASP and OWASP SAMM
              </li>
            </ul>
          </div>
          <div className="w-full">
            <ul>
              <li data-aos="fade-up">
                Expertise in major healthcare coding systems like ICPC-2, DICOM,
                CPT, and ICD-10
              </li>
              <li className="pt-4" data-aos="fade-up">
                Compliance with payment processing standards such as PCI DSS
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareSecurity;
