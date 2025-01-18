import { ServicesCard } from "@/components/componentShared";
import React from "react";

const services = [
  {
    title: "mHealths",
    description:
      "Mobile healthcare applications facilitating appointment scheduling, prescription refills, remote consultations, and patient education",
  },
  {
    title: "EHR/EMR development and integration",
    description:
      "Electronic health records and medical records software that improves organizational interoperability and allows clinics to securely exchange patient information",
  },
  {
    title: "Pharmacy management solutions",
    description:
      "Pharmaceutical software that facilitates day-to-day operations at pharmacies, including supply chain management, contracting, analytics, and reporting",
  },
  {
    title: "Patient engagement",
    description:
      "Healthcare software solutions leveraging state-of-the-art media streaming, content delivery, and communication technologies for remote doctor-patient interactions and patient education",
  },
  {
    title: "Hospital management software",
    description:
      "Software solutions covering hospitals' needs like inventory, insurance claims, ePrescriptions, patient, and contract management",
  },
  {
    title: "Veterinary practice management software",
    description:
      "Software that helps veterinary professionals manage their daily workflows, including inventory tracking, accounting, and communications with patients, or rather, their owners",
  },
  {
    title: "Medical device software",
    description:
      "Healthcare software solutions to power strictly regulated medical equipment, such as blood collection devices, medical wearables, and inhalers",
  },
  {
    title: "Telehealth and telemedicine",
    description:
      "Medical software solutions for remote consultations, diagnostics, and treatment where patients can securely share their information via video calls and instant chats",
  },

  {
    title: "Healthcare data analytics",
    description:
      "Medical software solutions harnessing the power of AI and predictive analytics to derive actionable insights and promote data-driven decisions",
  },
  {
    title: "Patient portals",
    description:
      "Feature-rich software encouraging patients to be proactive in their health care and have access to their health data analytics, online consultations, educational material, and much more",
  },
  {
    title: "Remote patient monitoring",
    description:
      "Medical applications that collect and process patient data coming from remote devices, allowing healthcare professionals to watch over patients at home and swiftly interfere if needed",
  },
  {
    title: "HL7/FHIR interface software",
    description:
      "Custom interface solutions compatible with healthcare interoperability standards enabling medical practices to securely integrate with third-party applications",
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
          <span className="text-amber-400">we develop</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          Our medical software solutions portfolio features powerful tools
          driving patient engagement and automating fastidious tasks associated
          with inpatient and outpatient care. To secure patient data and protect
          your IT infrastructure against cyberattacks, we create medical
          software in line with healthcare IT standards.
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
