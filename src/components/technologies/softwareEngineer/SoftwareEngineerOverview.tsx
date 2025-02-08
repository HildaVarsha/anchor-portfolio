import React from "react";

interface RoleColumnProps {
  roles: string[];
}
const SoftwareEngineerOverview = () => {
  const RoleColumn: React.FC<RoleColumnProps> = ({ roles }) => (
    <div className="w-full">
      {roles?.map((role, index) => (
        <li
          key={index}
          className={index % 2 !== 0 ? "py-8" : ""}
          data-aos="fade-up"
        >
          {role}
        </li>
      ))}
    </div>
  );
  return (
    <div className="bg-white">
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/software-overview.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 lg:px-0 text-2xl lg:text-5xl mx-auto font-bold  lg:container">
          <p data-aos="fade-up">Overview of Our Software </p>
          <p className="text-lime-500" data-aos="fade-up">
            Engineering Company
          </p>
        </div>
      </div>

      <div className="py-12 bg-white">
        <div className="py-12 bg-blue-100 p-8 text-slate-800 container mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
            <RoleColumn
              roles={[
                "Maturity: on the market since 2009",
                "Experience: 600+ projects completed",
                "Flexibility: A team of 350+ IT specialists across five countries, minimizing risks through a distributed team approach.",
                "Transparency: Ensuring clear communication with efficient development processes, robust project management, and detailed reporting tools.",
              ]}
            />
            <RoleColumn
              roles={[
                "Agility: fast innovation at scale",
                "Mastery: full-stack software engineering capabilities",
                "Reliability: Achieving a high Customer Satisfaction Index (CSI) of 83%.",
                "Excellence: Adhering to ISO 9001:2015 and ISO/IEC 27001 standards, backed by partnerships with Microsoft and Google Cloud.",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareEngineerOverview;
