import React from "react";
import CollapsableSection from "@/components/CollapsableSection";

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-6xl font-bold">About Me</h1>
      <CollapsableSection
        title="Education"
        text={[
          "Bachelor's Degree in Computer Science",
          "University of Somewhere, 2018-2022",
        ]}
      />
      <CollapsableSection
        title="Experience"
        text={[
          "Software Engineer at Company A (2022-Present)",
          "Intern at Company B (Summer 2021)",
        ]}
      />
    </div>
  );
};

export default About;
