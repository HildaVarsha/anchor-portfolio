import React from "react";

const WebAppExperts = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/graphic-experts.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl mx-auto font-bold max-w-4xl"
          data-aos="fade-up"
        >
          &quot;<span className="text-lime-500">Experts supporting</span>
          every step of your web development journey.&quot;
        </p>
      </div>
      <div className="py-12 bg-lime-500">
        <p
          className="px-4 md:px-0 md:max-w-4xl mx-auto text-slate-800"
          data-aos="fade-up"
        >
          &quot;With our full-stack custom web development services, we handle
          everything from crafting the UI of your web solution to developing the
          algorithms and databases behind it. As your trusted software
          development partner, we’re here to solve any tech challenges you
          face.&quot;
        </p>
      </div>
    </div>
  );
};

export default WebAppExperts;
