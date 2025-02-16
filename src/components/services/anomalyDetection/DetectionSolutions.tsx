import { PageHeaderText } from "@/components/shared";
import React from "react";

const DetectionSolutions = () => {
  return (
    <div className="bg-white py-12">
      <div className="mt-12 p-4  lg:p-12 lg:container mx-auto text-slate-800 bg-blue-100 ">
        <PageHeaderText label="Our anomaly detection solutions will help you:" />
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16">
          <div>
            <li data-aos="fade-up">
              Transform Your Isolated IT Systems and Data Sources into a Unified
              Intelligent Analytics Solution
            </li>
            <li className="py-4" data-aos="fade-up">
              Eliminate Manual Data Review and Data Labeling with Unsupervised
              Machine Learning
            </li>
            <li data-aos="fade-up">
              Identify Spikes, Performance Issues, Correlations, and Trend
              Changes Before They Impact Your Business
            </li>
          </div>
          <div>
            <li data-aos="fade-up">Stay Vigilant with Real-Time Alerts</li>
            <li className="py-4" data-aos="fade-up">
              Empower Employees with Accessible Data Analytics for Better
              Decision-Making
            </li>
            <li data-aos="fade-up">
              Enhance Security, Reliability, and Resilience of Software and
              Cyber-Physical Systems
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetectionSolutions;
