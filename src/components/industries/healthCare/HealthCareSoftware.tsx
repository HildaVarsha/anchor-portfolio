import { ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "mHealth Apps",
    description:
      "Mobile healthcare applications that enable appointment scheduling, prescription refills, remote consultations, and patient education, enhancing accessibility and convenience for patients.",
  },
  {
    title: "EHR/EMR Development & Integration",
    description:
      "Electronic Health Records (EHR) and Medical Records (EMR) software that improves organizational interoperability, enabling clinics to securely exchange patient information and streamline workflow.",
  },
  {
    title: "Pharmacy Management Solutions",
    description:
      "Pharmaceutical software designed to optimize day-to-day operations in pharmacies, covering supply chain management, contracting, analytics, and reporting to improve efficiency and service delivery.",
  },
  {
    title: "Patient Engagement Solutions",
    description:
      "Healthcare software utilizing advanced media streaming, content delivery, and communication technologies to enhance remote doctor-patient interactions and promote patient education.",
  },
  {
    title: "Hospital Management Software",
    description:
      "Comprehensive software solutions addressing hospital needs such as inventory management, insurance claims, ePrescriptions, patient records, and contract management, improving hospital operations.",
  },
  {
    title: "Veterinary Practice Management Software",
    description:
      "Software tailored for veterinary professionals to streamline daily workflows, including inventory tracking, accounting, and communication with patients and their owners.",
  },
  {
    title: "Medical Device Software",
    description:
      "Custom healthcare software solutions to support regulated medical equipment, including blood collection devices, medical wearables, and inhalers, ensuring compliance and functionality.",
  },
  {
    title: "Telehealth & Telemedicine Solutions",
    description:
      "Medical software platforms for remote consultations, diagnostics, and treatment, enabling secure video calls and instant chats for patients to share information with healthcare providers.",
  },
  {
    title: "Healthcare Data Analytics",
    description:
      "AI-powered medical software solutions that leverage predictive analytics to derive actionable insights and promote data-driven decisions in healthcare practices.",
  },
  {
    title: "Patient Portals",
    description:
      "Feature-rich software empowering patients to take a proactive role in their healthcare by providing access to health data analytics, online consultations, educational resources, and more.",
  },
  {
    title: "Remote Patient Monitoring",
    description:
      "Medical applications that collect and analyze patient data from remote devices, enabling healthcare professionals to monitor patients at home and intervene promptly if necessary.",
  },
  {
    title: "HL7/FHIR Interface Software",
    description:
      "Custom interface solutions designed to meet healthcare interoperability standards, ensuring secure integration with third-party applications and facilitating data exchange across systems.",
  },
];

const HealthCareSoftware = () => {
  return (
    <div className="bg-white ">
      <div
        className="py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/health-care.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Healthcare software solutions
          <span className="text-lime-500">we develop</span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Our collection of healthcare software solutions offers advanced tools
          that enhance patient engagement while automating the repetitive tasks
          involved in both inpatient and outpatient care. To ensure the safety
          of patient data and safeguard your IT infrastructure from cyber
          threats, we develop medical software in full compliance with
          healthcare IT regulations.
        </p>
      </div>
      <div className="px-4 md:px-0 md:container mx-auto text-slate-800">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <ServicesCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthCareSoftware;
