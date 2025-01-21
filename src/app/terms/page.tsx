"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TermsConditions: React.FC = () => {
  const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "acceptance", title: "Acceptance of Terms" },
    { id: "modifications", title: "Modifications to Terms" },
    { id: "services", title: "Our Services" },
    { id: "user-obligations", title: "User Obligations" },
    { id: "prohibited-activities", title: "Prohibited Activities" },
    { id: "intellectual-property", title: "Intellectual Property Rights" },
    { id: "third-party-links", title: "Third-Party Links" },
    { id: "disclaimer", title: "Disclaimer of Warranties" },
    { id: "liability", title: "Limitation of Liability" },
    { id: "indemnification", title: "Indemnification" },
    { id: "termination", title: "Termination" },
    { id: "governing-law", title: "Governing Law" },
    { id: "contact", title: "Contact Information" },
  ];
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 1500, // Set default animation duration
      easing: "ease-in-out", // Set easing function
      once: false, // Ensures animation happens only once
    });
  }, []);
  useEffect(() => {
    AOS.refresh(); // Refresh AOS animations
  }, []);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <div className="bg-blue-400 py-16 h-96 flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 text-center">
          <h1
            data-aos="fade-up"
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Terms and Conditions
          </h1>
          <p data-aos="fade-up" className="mt-4 text-white text-lg md:text-xl">
            Welcome to Anchor Informatics. Please read these terms and
            conditions carefully before using our services.
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contents</h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          {sections.map((section) => (
            <li key={section.id} data-aos="fade-up">
              <a
                href={`#${section.id}`}
                className="text-amber-400 hover:underline"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-8 md:py-16 space-y-12">
        <div id="introduction" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold">
            Introduction
          </h3>
          <p className="text-lg" data-aos="fade-up">
            These terms and conditions govern your use of our website and
            services. By accessing or using our platform, you agree to comply
            with these terms.
          </p>
        </div>

        <div id="acceptance" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold">
            Acceptance of Terms
          </h3>
          <p className="text-lg" data-aos="fade-up">
            By using our services, you confirm that you accept these terms and
            agree to comply with them. If you do not agree, you must not use our
            services.
          </p>
        </div>

        <div id="modifications" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold">
            Modifications to Terms
          </h3>
          <p className="text-lg" data-aos="fade-up">
            We may update these terms from time to time. Changes will be
            effective immediately upon posting, and your continued use of our
            services indicates acceptance of the updated terms.
          </p>
        </div>

        <div id="services" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold">
            Our Services
          </h3>
          <p data-aos="fade-up" className="text-lg">
            We provide software development and AI solutions tailored to your
            business needs. The scope and details of services are outlined in
            your agreement with us.
          </p>
        </div>

        <div id="user-obligations" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold">
            User Obligations
          </h3>
          <p data-aos="fade-up" className="text-lg">
            You agree to use our services responsibly and comply with all
            applicable laws. You must not misuse our platform or services.
          </p>
        </div>

        <div id="prohibited-activities" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold">
            Prohibited Activities
          </h3>
          <p data-aos="fade-up" className="text-lg">
            Prohibited activities include, but are not limited to, unauthorized
            access, illegal activities, and any actions that harm our platform
            or users.
          </p>
        </div>

        <div id="intellectual-property" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold">
            Intellectual Property Rights
          </h3>
          <p data-aos="fade-up" className="text-lg">
            All content on our platform, including text, graphics, and code, is
            owned by Anchor Informatics and protected by intellectual property
            laws.
          </p>
        </div>

        <div id="third-party-links" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold">
            Third-Party Links
          </h3>
          <p data-aos="fade-up" className="text-lg">
            Our website may contain links to third-party sites. We are not
            responsible for their content or practices and encourage you to
            review their terms and policies.
          </p>
        </div>

        <div id="disclaimer" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold">
            Disclaimer of Warranties
          </h3>
          <p data-aos="fade-up" className="text-lg">
            Our services are provided "as is" without warranties of any kind,
            express or implied. We do not guarantee uninterrupted or error-free
            services.
          </p>
        </div>

        <div id="liability" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold">
            Limitation of Liability
          </h3>
          <p data-aos="fade-up" className="text-lg">
            To the fullest extent permitted by law, we are not liable for any
            direct, indirect, or consequential damages arising from your use of
            our services.
          </p>
        </div>

        <div id="indemnification" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold">
            Indemnification
          </h3>
          <p data-aos="fade-up" className="text-lg">
            You agree to indemnify and hold harmless Anchor Informatics from any
            claims, damages, or liabilities resulting from your breach of these
            terms.
          </p>
        </div>

        <div id="termination" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold">
            Termination
          </h3>
          <p data-aos="fade-up" className="text-lg">
            We may terminate or suspend your access to our services at any time
            without prior notice if you violate these terms.
          </p>
        </div>

        <div id="governing-law" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold">
            Governing Law
          </h3>
          <p data-aos="fade-up" className="text-lg">
            These terms are governed by and construed in accordance with the
            laws of the United Kingdom. Disputes will be subject to the
            exclusive jurisdiction of UK courts.
          </p>
        </div>

        <div id="contact" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl md:text-2xl font-semibold">
            Contact Information
          </h3>
          <p data-aos="fade-up" className="text-lg">
            For questions or concerns regarding these terms, contact us at
            <a
              href="mailto:info@anchorinformatics.co.uk"
              className="text-amber-400 hover:underline pl-2"
            >
              info@anchorinformatics.co.uk
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
