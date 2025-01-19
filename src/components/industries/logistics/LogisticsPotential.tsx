import React from "react";

const LogisticsPotential = () => {
  return (
    <div className="bg-white pb-16">
      <div
        className=" h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/unleashing.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p
          className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto"
          data-aos="fade-up"
        >
          Unleashing the potential
          <span className="text-amber-400"> {""} of new-age tech</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p
          className="px-4 md:px-0 md:container mx-auto text-slate-800"
          data-aos="fade-up"
        >
          With more than 5 years of experience in transportation and logistics
          software development, we know how to help your business thrive amidst
          disruption. We deliver innovative solutions with demonstrated value,
          enabling our clients to transform supply chain processes and achieve
          measurable benefits.
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="p-12  md:container mx-auto text-slate-800 bg-blue-100">
          <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-16">
            <div className="w-full">
              <li data-aos="fade-up">
                <strong>Optimize route planning</strong> to reduce delivery
                time, lower fuel consumption, and manage more orders.
              </li>
              <li className="py-6" data-aos="fade-up">
                <strong>Track vehicles</strong> to enhance safety, improve
                driver productivity, streamline maintenance, and optimize fuel
                usage.
              </li>
              <li data-aos="fade-up">
                <strong>Make fleet operations smarter</strong> with real-time
                data on traffic, orders, and weather conditions.
              </li>
              <li className="py-6" data-aos="fade-up">
                <strong>Automate your warehouse</strong> to reduce operational
                costs and improve team performance.
              </li>
              <li data-aos="fade-up">
                <strong>Track inventory in real-time</strong> to avoid dead
                stock, prevent overstocking, and eliminate stock-outs.
              </li>
              <li className="pt-6" data-aos="fade-up">
                <strong>Strengthen inventory and freight security</strong> with
                IoT-enabled real-time alerts.
              </li>
            </div>
            <div className="w-full">
              <li data-aos="fade-up">
                <strong>Automate day-to-day reporting</strong> to better manage
                resources and forecast demand.
              </li>
              <li className="py-6" data-aos="fade-up">
                <strong>
                  Simplify your entire order cycle with automation
                </strong>
                , data analytics, and comprehensive reporting.
              </li>
              <li data-aos="fade-up">
                <strong>Manage pricing dynamically</strong> with end-to-end data
                ecosystems that provide actionable insights.
              </li>
              <li className="py-6" data-aos="fade-up">
                <strong>Know sooner with predictive analytics</strong> to
                forecast peaks and proactively manage assets.
              </li>
              <li data-aos="fade-up">
                <strong>Integrate and synchronize logistics systems</strong> to
                achieve full transparency and traceability across your
                operations.
              </li>
              <li className="pt-6" data-aos="fade-up">
                <strong>Minimize wasted time and resources</strong> with
                high-quality custom AI applications.
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsPotential;
