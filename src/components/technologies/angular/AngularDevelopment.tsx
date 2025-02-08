import React from "react";
interface RoleColumnProps {
  roles: string[];
}

const AngularDevelopment = () => {
  const RoleColumn: React.FC<RoleColumnProps> = ({ roles }) => (
    <div className="w-full" data-aos="fade-up">
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
          backgroundImage: "url('/graphic-services.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 lg:px-0 text-2xl lg:text-5xl mx-auto font-bold  lg:container"
          data-aos="fade-up"
        >
          Our proven Angular development workflow –{" "}
          <span className="text-lime-500">A closer look.</span>
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 lg:px-0 lg:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          For an Angular application built with best coding practices, you need
          the right development partner—and you&apos;ve found it. Anchor
          Informatics highly skilled Angular development team is equipped to
          meet any of your requirements, no matter how complex.
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="py-12 bg-blue-100 p-8 text-slate-800 container mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-12">
            <RoleColumn
              roles={[
                "We apply our deep knowledge of key Angular features like dependency injection, data binding, or routing",
                "We widely use Angular CLI commands to save hours of development time",
                "We separate functionality into reusable blocks of code to speed up development",
                "We break down big components to ease testing, debugging, and maintenance",
                "We properly organize the file and folder structure to make it easier to scale and maintain",
              ]}
            />
            <RoleColumn
              roles={[
                "We follow the Single Responsibility principle to keep files clean and easy to read",
                "We take advantage of lazy-load modules and Ivy Renderer to reduce the size of the application",
                "We monitor Bundle Sizes to make sure your application loads faster",
                "We use Angular Universal and Angular Prerender.io to SEO optimize your web app",
                "We keep up to date to ensure you get the most of your investment in Angular development services",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AngularDevelopment;
