import React from "react";
import HireJavaDeveloperButton from "./HireJavaDeveloperButton";

interface TechnologyGroupProps {
  title: string;
  items: string[];
}

const TechnologyGroup: React.FC<TechnologyGroupProps> = ({ title, items }) => (
  <div>
    <p className="text-2xl font-semibold" data-aos="fade-up">
      {title}
    </p>
    <ul className="py-4">
      {items.map((item, index) => (
        <li
          key={index}
          className={index % 2 !== 0 ? "py-4" : "pt-4"}
          data-aos="fade-up"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const JavaTechnologies: React.FC = () => {
  const technologyGroups = [
    { title: "Java Platforms", items: ["Java", "Groovy", "Scala", "Kotlin"] },
    { title: "Security Frameworks", items: ["JAAS", "Spring Security"] },
    { title: "Architecture", items: ["Enterprise", "SOA", "Microservices"] },
    {
      title: "UI Frameworks",
      items: [
        "Thymeleaf",
        "Vaadin",
        "GWT",
        "JSF (Primefaces, Richfaces)",
        "JQuery",
        "JS",
      ],
    },
    {
      title: "Java Programming",
      items: [
        "Spring",
        "Enterprise Java Beans (EJB)",
        "Java Server Pages (JSP)",
        "Servlets",
        "JSF",
        "Apache Struts",
        "JMS",
        "Log4J",
        "XSL",
        "XSLT",
        "Apache Commons",
        "Apache POI",
      ],
    },
    {
      title: "Persistence/ORM Tools",
      items: ["JPA", "Spring Data", "Hibernate", "FlyWay", "iBatis/MyBatis"],
    },
    { title: "Reporting", items: ["JasperReports", "Apache POI"] },
    {
      title: "Database",
      items: [
        "Microsoft SQL Server",
        "Oracle",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/java-technology.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto">
          <p
            className="px-4 lg:px-0 text-2xl lg:text-5xl font-bold"
            data-aos="fade-up"
          >
            Technologies
          </p>
          <p
            className="text-lime-500 px-4 lg:px-0 text-2xl lg:text-5xl font-bold"
            data-aos="fade-up"
          >
            we use
          </p>
        </div>
      </div>

      {/* Technologies Section */}
      <div className="py-12 bg-white">
        <div className="px-4 lg:px-0 lg:container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 text-slate-800">
          {technologyGroups.map((group, index) => (
            <TechnologyGroup
              key={index}
              title={group.title}
              items={group.items}
            />
          ))}
          <HireJavaDeveloperButton label="Build your Java app" />
        </div>
      </div>
    </div>
  );
};

export default JavaTechnologies;
