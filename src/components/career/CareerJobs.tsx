import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "../ui";
import Link from "next/link";
import { PageHeaderText } from "../shared";

const generateRandomId = () =>
  Math.floor(100000 + Math.random() * 900000).toString();
const postingDate = new Date().toISOString().split("T")[0];
const closingDate = new Date();
closingDate.setMonth(closingDate.getMonth() + 3);
const formattedClosingDate = closingDate.toISOString().split("T")[0];

const CareerJobs = () => {
  const jobs = [
    {
      id: generateRandomId(),
      title: "FinTech Intern",
      location: "London",
      remote: "Yes",
      jobType: "Temporary",
      closingDate: formattedClosingDate,
      description:
        "We are seeking a highly motivated FinTech Intern to gain hands-on experience in financial analysis, blockchain, and AI in finance. The role involves conducting research on emerging financial technologies, assisting in data analysis, and developing insights on market trends. You will contribute by working closely with our development team to integrate AI solutions in finance. Our culture fosters innovation, collaboration, and continuous learning to stay ahead in the fintech industry.",
    },
    {
      id: generateRandomId(),
      title: "UI/UX Designer",
      location: "London",
      remote: "No",
      jobType: "Permanent",
      closingDate: formattedClosingDate,
      description:
        "We are looking for a UI/UX Designer to create intuitive, user-friendly interfaces for our digital products. The role requires designing wireframes, user flows, and interactive prototypes. You will contribute by enhancing user experience through research-based design improvements. Our culture values creativity, user-centric design, and teamwork to build aesthetically pleasing and functional digital experiences.",
    },
    {
      id: generateRandomId(),
      title: "MBA Intern",
      location: "London",
      remote: "Yes",
      jobType: "Temporary",
      closingDate: formattedClosingDate,
      description:
        "We are looking for an MBA Intern to support our business strategy, operations, and market research initiatives. The role involves analyzing business models, identifying market opportunities, and assisting in decision-making processes. You will contribute by offering strategic insights and recommendations based on data-driven research. Our culture emphasizes problem-solving, leadership, and cross-functional collaboration to drive business growth.",
    },
    {
      id: generateRandomId(),
      title: "Business Analyst",
      location: "London",
      remote: "No",
      jobType: "Permanent",
      closingDate: formattedClosingDate,
      description:
        "We are looking for a Business Analyst to bridge the gap between business needs and technology solutions. The role requires gathering and analyzing requirements, developing functional specifications, and collaborating with stakeholders. You will contribute by ensuring seamless communication between teams and optimizing business processes. Our culture promotes analytical thinking, continuous improvement, and strategic planning to drive efficiency and growth.",
    },
    {
      id: generateRandomId(),
      title: "Digital Marketing Executive - Intern",
      location: "London",
      remote: "Yes",
      jobType: "Temporary",
      closingDate: formattedClosingDate,
      description:
        "We are looking for a Digital Marketing Intern to help execute our online marketing strategies. The role involves content creation, social media management, SEO optimization, and campaign tracking. You will contribute by increasing brand visibility and engagement through creative digital initiatives. Our culture embraces innovation, data-driven decision-making, and adaptability to the ever-changing digital landscape.",
    },
    {
      id: generateRandomId(),
      title: "Project Manager - Intern",
      location: "London",
      remote: "No",
      jobType: "Contract",
      closingDate: formattedClosingDate,
      description:
        "We are seeking a Project Management Intern to assist in planning, tracking, and executing various projects. The role involves coordinating teams, managing timelines, and ensuring project deliverables. You will contribute by implementing best practices in project execution and ensuring smooth workflow. Our culture prioritizes organization, teamwork, and accountability to achieve successful project outcomes.",
    },
  ];

  return (
    <div className="bg-white py-16 text-slate-800">
      <div className="px-4 md:px-0 md:container mx-auto">
        <PageHeaderText label="Find your jobs" />
        <Accordion type="single" collapsible className="w-full">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="shadow-sm border border-slate-300 rounded-md p-4 mb-6"
            >
              <AccordionItem value={job.id} data-aos="fade-up">
                <AccordionTrigger
                  className="text-lg font-semibold w-full"
                  data-aos="fade-up"
                >
                  {job.title} ({job.jobType})
                </AccordionTrigger>
                <AccordionContent className="pt-6" data-aos="fade-up">
                  <p>
                    <strong>Job ID:</strong> {job.id}
                  </p>
                  <p className="py-2">
                    <strong>Location:</strong> {job.location}
                  </p>
                  <p>
                    <strong>Remote Working:</strong> {job.remote}
                  </p>
                  <p className="py-2">
                    <strong>Closing Date:</strong> {job.closingDate}
                  </p>
                  <p className="text-lg py-3">{job.description}</p>
                  <a
                    href={`mailto:info@anchorinformatics.co.uk?subject=Application for ${job.title}&body=Dear Hiring Team,%0D%0A%0D%0AI am interested in the ${job.title} position. Please find my resume attached.%0D%0A%0D%0AThank you.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`}
                    className="mt-8 flex items-center justify-center"
                  >
                    <Button>Apply Now</Button>
                  </a>
                </AccordionContent>
              </AccordionItem>
            </div>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default CareerJobs;
