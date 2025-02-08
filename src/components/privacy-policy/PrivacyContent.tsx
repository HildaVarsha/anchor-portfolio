import React from "react";

const PrivacyContent: React.FC = () => {
  const sections = [
    { id: "purpose", title: "Purpose" },
    { id: "information", title: "The Type of Information We Hold About You" },
    { id: "principles", title: "Data Protection Principles" },
    { id: "collection", title: "How Do We Collect Personal Data From You?" },
    {
      id: "purposes",
      title: "Purposes for Which We May Use Your Personal Data",
    },
    { id: "marketing", title: "Marketing and Opting Out" },
    {
      id: "rights",
      title: "Your Rights in Connection with Your Personal Data",
    },
    {
      id: "sharing",
      title: "Who Will Your Personal Information Be Shared With?",
    },
    { id: "security", title: "Security of Your Personal Information" },
    {
      id: "transfers",
      title: "Where We Transfer Your Personal Information To",
    },
    {
      id: "retention",
      title: "How Long Do We Keep Hold of Your Personal Information?",
    },
    { id: "analytics", title: "Google Analytics" },
    { id: "cookies", title: "Cookies" },
    { id: "accuracy", title: "Maintaining Data Accuracy" },
    { id: "links", title: "Links to Other Websites" },
    { id: "complaints", title: "The Right to Complain" },
    { id: "changes", title: "Changes to Our Privacy Notice" },
    { id: "contact", title: "Contacting Us" },
  ];

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header Section */}
      <div className="bg-lime-500 py-16 h-96 flex flex-col justify-center items-center">
        <div className="container mx-auto px-4 text-center">
          <h1
            data-aos="fade-up"
            className="text-4xl lg:text-6xl font-bold text-white"
          >
            Privacy Policy
          </h1>
          <p data-aos="fade-up" className="mt-4 text-white text-lg lg:text-xl">
            Welcome to Anchor Informatics Ltd' Privacy Policy. Your privacy is
            at the heart of our business.
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="container mx-auto px-4 py-8 lg:py-16">
        <h2
          data-aos="fade-up"
          className="text-2xl lg:text-3xl font-semibold mb-4"
        >
          Contents
        </h2>
        <ul className="list-disc list-inside space-y-2 text-lg">
          {sections.map((section) => (
            <li key={section.id} data-aos="fade-up">
              <a
                href={`#${section.id}`}
                data-aos="fade-up"
                className="text-lime-500 hover:underline"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 py-8 lg:py-16 space-y-12">
        <div id="purpose" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            Purpose
          </h3>
          <p data-aos="fade-up" className="text-lg">
            At Anchor Informatics Ltd, we are committed to safeguarding your
            personal information. This Privacy Policy explains how we collect,
            use, and protect your data, ensuring compliance with applicable data
            protection laws.
          </p>
        </div>

        <div id="information" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            The Type of Information We Hold About You
          </h3>
          <p data-aos="fade-up" className="text-lg">
            We may collect and process the following types of personal data:
            contact details, employment information, financial details,
            preferences, and interactions with our services.
          </p>
        </div>

        <div id="principles" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            Data Protection Principles
          </h3>
          <p data-aos="fade-up" className="text-lg">
            We adhere to the principles of data protection, ensuring your data
            is used lawfully, fairly, and transparently, and is stored securely
            for no longer than necessary.
          </p>
        </div>

        <div id="collection" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            How Do We Collect Personal Data From You?
          </h3>
          <p data-aos="fade-up" className="text-lg">
            Personal data is collected through forms, surveys, direct
            interactions, website cookies, and third-party services where
            consent has been provided.
          </p>
        </div>

        <div id="purposes" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            Purposes for Which We May Use Your Personal Data
          </h3>
          <p data-aos="fade-up" className="text-lg">
            We use your data to provide services, process payments, improve our
            offerings, comply with legal obligations, and send relevant
            communications with your consent.
          </p>
        </div>

        <div id="marketing" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            Marketing and Opting Out
          </h3>
          <p data-aos="fade-up" className="text-lg">
            You can opt out of marketing communications at any time by
            contacting us or clicking the unsubscribe link in our emails.
          </p>
        </div>

        <div id="rights" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            Your Rights in Connection with Your Personal Data
          </h3>
          <p data-aos="fade-up" className="text-lg">
            You have the right to access, correct, delete, or restrict the
            processing of your personal data. You may also withdraw consent or
            lodge a complaint with a supervisory authority.
          </p>
        </div>

        <div id="sharing" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            Who Will Your Personal Information Be Shared With?
          </h3>
          <p data-aos="fade-up" className="text-lg">
            Your data may be shared with trusted partners and service providers
            to fulfill contractual obligations, always in accordance with
            applicable laws.
          </p>
        </div>

        <div id="security" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            Security of Your Personal Information
          </h3>
          <p data-aos="fade-up" className="text-lg">
            We implement robust security measures to protect your data from
            unauthorized access, alteration, disclosure, or destruction.
          </p>
        </div>

        <div id="transfers" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            Where We Transfer Your Personal Information To
          </h3>
          <p data-aos="fade-up" className="text-lg">
            Your data may be transferred to countries outside your region for
            processing, always ensuring adequate safeguards are in place.
          </p>
        </div>

        <div id="retention" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            How Long Do We Keep Hold of Your Personal Information?
          </h3>
          <p data-aos="fade-up" className="text-lg">
            We retain your data only as long as necessary to fulfill the
            purposes outlined in this policy, or as required by law.
          </p>
        </div>

        <div id="analytics" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            Google Analytics
          </h3>
          <p data-aos="fade-up" className="text-lg">
            We use Google Analytics to understand website usage and improve our
            services. Data collected is anonymized and used in compliance with
            privacy laws.
          </p>
        </div>

        <div id="cookies" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            Cookies
          </h3>
          <p data-aos="fade-up" className="text-lg">
            Cookies are used to enhance your browsing experience. You can manage
            cookie preferences through your browser settings.
          </p>
        </div>

        <div id="accuracy" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            Maintaining Data Accuracy
          </h3>
          <p data-aos="fade-up" className="text-lg">
            We strive to ensure the accuracy of your data. Please notify us of
            any updates or corrections to your personal information.
          </p>
        </div>

        <div id="links" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            Links to Other Websites
          </h3>
          <p data-aos="fade-up" className="text-lg">
            Our website may contain links to third-party sites. We are not
            responsible for their privacy practices, and encourage you to review
            their policies.
          </p>
        </div>

        <div id="complaints" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            The Right to Complain
          </h3>
          <p data-aos="fade-up" className="text-lg">
            If you have concerns about our handling of your data, please contact
            us. You may also lodge a complaint with a relevant regulatory
            authority.
          </p>
        </div>

        <div id="changes" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            Changes to Our Privacy Notice
          </h3>
          <p data-aos="fade-up" className="text-lg">
            We may update this Privacy Policy periodically. Please check this
            page for the latest version.
          </p>
        </div>

        <div id="contact" className="space-y-4">
          <h3 data-aos="fade-up" className="text-xl lg:text-2xl font-semibold">
            Contacting Us
          </h3>
          <p data-aos="fade-up" className="text-lg">
            For questions or concerns regarding this Privacy Policy, contact us
            at{" "}
            <a
              href="mailto:info@anchorinformatics.co.uk"
              className="text-lime-500 hover:underline"
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

export default PrivacyContent;
