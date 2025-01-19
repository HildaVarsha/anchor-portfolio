import { PageHeaderText } from "@/components/shared";
import { CheckCircle } from "lucide-react";
import React from "react";

const ELearningOffer = () => {
  return (
    <div>
      <div
        className="bg-white py-16 h-[400px] flex items-center"
        style={{
          backgroundImage: "url('/e-learning-offer.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-4 md:px-0 md:container mx-auto">
          <p
            className="text-3xl md:text-5xl mx-auto font-bold container"
            data-aos="fade-up"
          >
            Offering flexible
            <span className="text-amber-400 text-3xl md:text-5xl mx-auto font-bold pl-2">
              engagement models
            </span>
          </p>
        </div>
      </div>
      <div className="py-12 bg-white">
        <div className="p-12  md:container mx-auto text-slate-800 bg-amber-100">
          <PageHeaderText label="ITRex — retail software development company you can trust" />
          <div className="py-6 flex flex-col md:flex-row gap-4 md:gap-16">
            <div className="w-full">
              <div className="flex gap-4">
                <CheckCircle className="w-20 h-20 pr-1" data-aos="fade-up" />
                <p data-aos="fade-up">
                  <strong>R&D and consulting.</strong> Analyzing your
                  educational needs, we will help you formulate a business case,
                  select the right software solution, define its feature set,
                  and devise an implementation roadmap.
                </p>
              </div>
              <div className="flex gap-4 pt-12">
                <CheckCircle className="w-20 h-20 pr-1" data-aos="fade-up" />
                <p data-aos="fade-up">
                  <strong>Legacy eLearning solution enhancement.</strong> We
                  will enrich your solution with new features, optimize the
                  existing workflows, improve the solution’s performance and
                  user experience, or help migrate legacy software to the cloud.
                </p>
              </div>
            </div>
            <div className="w-full">
              <div className="flex gap-4">
                <CheckCircle className="w-20 h-20 pr-1" data-aos="fade-up" />
                <p data-aos="fade-up">
                  <strong>Custom eLearning software development.</strong> We
                  will develop an educational solution from scratch, packing it
                  with the necessary features, putting the required integrations
                  in place, and ensuring compliance and high performance.
                </p>
              </div>
              <div className="flex gap-4 pt-12">
                <CheckCircle className="w-20 h-20 pr-1" data-aos="fade-up" />
                <p data-aos="fade-up">
                  <strong>
                    Customization of open-source learning platforms.
                  </strong>{" "}
                  We will assist you in choosing an optimum open-source solution
                  and tweak it to better suit your needs and workflows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ELearningOffer;
