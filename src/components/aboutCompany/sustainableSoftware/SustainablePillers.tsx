import { PageHeaderText } from "@/components/shared";
import React from "react";

const SustainablePillers = () => {
  return (
    <div className="bg-white py-8 md:pb-16 md:pt-1 text-slate-800">
      <div className="md:container px-4 mx-auto">
        <PageHeaderText label="Our Pillars" />
        <p className="py-4">
          At Anchor Informatics, we are dedicated to shaping a sustainable
          future through innovation and collaboration. Our sustainability
          strategy is built on three core pillars: Our People, Our Stakeholders,
          and Our Planet. These pillars guide us in making the software
          development industry more responsible, inclusive, and eco-friendly.
        </p>
        <p className="font-semibold text-2xl">
          Our People — Social Responsibility
        </p>
        <div>
          <p className="font-semibold py-4">Diversity & Inclusion</p>
          <p className="">
            Our exceptional and diverse team is our greatest asset, and we are
            dedicated to fostering a workplace where everyone feels welcome and
            has an equal opportunity to succeed. By prioritizing inclusion, we
            ensure that individuals from all backgrounds can share their unique
            perspectives and talents. Embracing diversity creates an environment
            where all ideas are valued, driving greater creativity and
            delivering better results for us, our clients, and the world.
          </p>
          <div className="md:pl-4 py-4">
            <li>
              <strong>Gender equality -</strong> We&apos;re striving for a
              balanced workforce.Through recruitment, mentorship, and targeted
              support, we strive to increase female representation in executive
              leadership, fostering a more inclusive digital economy.
            </li>
            <li className="py-4">
              <strong>LGBT+ friendly culture - </strong> We celebrate
              authenticity and encourage people to be themselves, fostering an
              LGBT+ friendly workplace where everyone feels safe, respected, and
              valued, regardless of their sexual orientation or gender identity.
            </li>
            <li>
              <strong>Integration of persons with disabilities - </strong>{" "}
              Enhancing the inclusion Supporting individuals with disabilities
              is a key priority for us as we strive to create an accessible and
              inclusive environment where everyone feels a sense of belonging.
            </li>
            <li className="py-4">
              <strong>Eradicating racism - </strong> We take action to establish
              an equitable fostering an environment that supports professionals
              from underrepresented minorities, while actively working to
              eliminate racism in the workplace.
            </li>
            <li>
              <strong>Mental health & wellness - </strong> Emphasizing mental
              Wellness is a priority at our company, driving a culture of
              equality that empowers all individuals to thrive. health and
            </li>
          </div>
          <div>
            <p className="font-semibold">Health & Safety</p>
            <p className="py-4">
              Health and safety are top priorities at Anchor Informatics, and we
              are dedicated to creating a safe work environment for our
              employees, whether in-house or remote. We provide ongoing
              training, implement robust safety policies, and regularly assess
              potential risks to prevent accidents and promote well-being.
            </p>
          </div>
          <div>
            <p className="font-semibold">Responsible Procurement</p>
            <p className="py-4">
              Our Social Pillar also focuses on responsible procurement. We
              carefully select suppliers who align with our values, ensuring
              they prioritize ethical labor practices, eco-friendly sourcing,
              and comply with the Anchor Informatics Supplier Code of Conduct.
              By committing to responsible procurement, we promote fair working
              conditions across our supply chain, actively combat
              discrimination, and support human rights.
            </p>
          </div>
          <div>
            <p className="font-semibold">Support of Communities</p>
            <p className="py-4">
              At Anchor Informatics, we are proud to financially support
              organizations that drive positive change globally. This includes
              our Support Ukraine campaign [LINK]. Our contributions help expand
              community networks, support skill-building initiatives, and
              enhance the operations of NGOs worldwide.
            </p>
          </div>
          <div>
            <p className="font-bold text-3xl py-4">
              Our Stakeholders — Governance
            </p>
            <p>
              We specialize in creating high-quality software solutions that
              drive sustainability and produce tangible results. By helping
              companies navigate the digital landscape, we use our expertise to
              ensure compliance with industry regulations while maintaining
              eco-friendly and socially responsible practices.
            </p>
            <p className="py-4">
              By collaborating with clients, we identify opportunities for
              sustainable innovation and leverage technology to address key
              environmental and social challenges. Our partnerships are founded
              on transparency, trust, and common objectives, allowing us to work
              together toward a cleaner and more prosperous future.
            </p>
          </div>
          <div>
            <p className="font-bold text-3xl py-4">Our Planet — Environment</p>
            <p>
              Caring for the environment is central to our mission. We are
              committed to reducing our environmental impact by minimizing
              energy and water consumption and managing waste responsibly.
              Through technology, we develop energy-saving software and
              integrate environmental, social, and governance (ESG) criteria
              into our decision-making. Our ultimate goal is to create a world
              where technology improves life for everyone, both now and for
              future generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SustainablePillers;