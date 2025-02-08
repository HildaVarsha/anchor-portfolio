import React from "react";
const services = [
  {
    title:
      "Experienced UI/UX design experts. When you hire UI/UX designers from ITRex, you gain a team with the ideal mix of technical expertise, soft skills, industry-recognized certifications, a powerful toolkit, and limitless creativity.",
  },
  {
    title:
      "A proven track record in UI/UX projects. With extensive experience in UI/UX design and development, we boast a strong portfolio of successful projects that highlight our expertise in delivering outstanding user experiences.",
  },
  {
    title:
      "Customer needs are our top priority. We focus on user-centered design, applying its key principles to every project. Regardless of who your clients are or their goals, our UI/UX design company will conceptualize and create precisely what you need.",
  },
  {
    title:
      "Business expertise at your service. We provide UI/UX design solutions to companies across diverse industries, including healthcare, retail, education, and logistics. Our team understands the unique challenges your business faces and knows how to tackle them with impactful user experience design.",
  },
];
const UiUXAtAnchor = () => {
  const ServiceCard = ({ title }: { title: string }) => (
    <li data-aos="fade-up">{title}</li>
  );
  return (
    <div className="bg-white pb-16">
      <div
        className="h-[400px] flex items-center pb-12"
        style={{
          backgroundImage: "url('/computer-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold lg:container mx-auto"
          data-aos="fade-up"
        >
          Why work with our
          <span className="text-lime-500 px-2"> UI/UX design company?</span>
        </p>
      </div>
      <div className="bg-white py-16 text-slate-800">
        <div className="lg:container mx-auto px-4">
          <div className="p-4 lg:p-12 grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-8 bg-blue-100 mt-12">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UiUXAtAnchor;
