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
        <p className="px-4 md:px-0 text-2xl md:text-5xl font-bold md:container mx-auto">
          Unleashing the potential
          <span className="text-amber-400"> {""} of new-age tech</span>
        </p>
      </div>
      <div className="py-12 bg-amber-400">
        <p className="px-4 md:px-0 md:container mx-auto text-slate-800">
          With over 5 years of experience in transportation and logistics
          software development, we know how to make your business capitalize on
          disruption. We create innovations with proven value that help our
          clients revolutionize processes across the supply chain for tangible
          benefits.
        </p>
      </div>
      <div className="py-12 bg-white">
        <div className="p-12  md:container mx-auto text-slate-800 bg-blue-100">
          <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-16">
            <div className="w-full">
              <li>
                <strong>Optimize route planning </strong> to reduce delivery
                time, use less fuel, and handle more orders
              </li>
              <li className="py-6">
                <strong>Track vehicles </strong> to improve safety, drivers’
                productivity, and maintenance scheduling fuel, and handle more
                orders
              </li>
              <li>
                <strong>Make fleet operations smart</strong> with data about
                traffic, orders, and weather
              </li>
              <li className="py-6">
                <strong>Automate your warehouse</strong>to cut operational costs
                and boost team performance
              </li>
              <li>
                <strong>Track inventory in real time</strong> to prevent dead
                stock, overstocking, and stock-outs
              </li>
              <li className="pt-6">
                <strong>Strengthen inventory and freight security </strong>with
                IoT-enabled real-time alerts{" "}
              </li>
            </div>
            <div className="w-full">
              <li>
                <strong>Automate day-to-day reporting </strong> for better
                management of resources and demand
              </li>
              <li className="py-6">
                <strong>
                  Simplify your entire order cycle with automation,
                </strong>{" "}
                data analytics, and reporting
              </li>
              <li>
                <strong>Manage pricing dynamically</strong> with end-to-end data
                ecosystems driving insights
              </li>
              <li className="py-6">
                <strong>Know sooner with predictive analytics</strong> to
                predict peaks and manage assets proactively
              </li>
              <li>
                <strong>Integrate and synchronize logistics systems</strong> to
                get full transparency and traceability
              </li>
              <li className="pt-6">
                <strong> Minimize wasted time and resources</strong>
                with high-quality custom AI applications
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogisticsPotential;
