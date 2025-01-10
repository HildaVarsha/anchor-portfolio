import React from "react";
const services = [
  {
    title: "Enterprise software",
    description:
      "If you're looking to hire a UI/UX designer to transform the look and feel of your CRM, ERP, HRM, MarTech, or other solutions, you've come to the right place. When providing UI/UX design services to enterprise clients, we ensure that every employee—regardless of their technical expertise—can easily navigate the system and enhance their productivity.",
  },
  {
    title: "Mobile Apps",
    description:
      "Considering mobile applications a key At every stage of the digital buyer journey, our UI/UX company helps your customers complete their desired actions—whether it's logging in through a social media account or making a purchase—more quickly and seamlessly. Contact us to discover more about our mobile UI/UX design services!",
  },
  {
    title: "Web Apps",
    description:
      "Need a hign conversion eCommerce website website,web portal, or a single page web application updating content in real Pressed for time? We’re here to assist! Our UI/UX web design team goes above and beyond to create apps that are visually appealing and perform seamlessly across various browsers and screen sizes.",
  },
  {
    title: "Dashboards",
    description:
      "A UI/UX Design company with valid data visualization, expertise, Anchor Informatics We create sleek cloud dashboards and interfaces for self-service BI and data analytics tools that stand out from the rest. Our team will integrate custom logic, filters, charts, and collaboration features to help you analyze business data and make more informed decisions.",
  },
  {
    title: "Immersive tech solutions",
    description:
      "Digital objects that infiltrate your camera feed in augmented reality apps Immersive sounds for games and mental health applications. Metaverses Populated with lifelike 3D avatars, our UI/UX design company has mastered it all. You can rely on our experts to elevate your clients' experience to an entirely new dimension!",
  },
  {
    title: "Embedded interfaces",
    description:
      "We augment our Iot and AI deveopment  efforts with professional UI/UX services. To that end, we create robust embedded solutions, including Whether it’s human-machine interfaces (HMIs), voice user interfaces (VUIs), or software enabling cross-device interactions, the Anchor Informatics team excels at eliminating friction across all user journey touchpoints. We know how to streamline the user experience for maximum ease and efficiency.",
  },
];
const UiUxDesign = () => {
  const ServiceCard = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => (
    <div>
      <p className="font-semibold text-slate-800">{title}</p>
      <p className="pt-6">{description}</p>
    </div>
  );
  return (
    <div className="bg-white py-16">
      <div
        className="h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/computer-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          Our UI/UX Design Company’s
          <span className="text-amber-400 px-2">Core Strengths</span>
        </p>
      </div>
      <div className="bg-amber-400 py-16 text-slate-800">
        <div className="md:container mx-auto px-4">
          <p>
            While your software solution may be complex behind the scenes, its
            UI/UX design should remain simple and intuitive. As an IT company
            committed to this philosophy, we prioritize consistency,
            responsiveness, and usability in every product we develop.
          </p>
        </div>
      </div>
      <div className="bg-white text-slate-800 pt-12">
        <div className="pt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 md:container mx-auto px-4">
          {services.map((service, index) => (
            <ServiceCard
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

export default UiUxDesign;
