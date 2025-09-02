import CollapsableSection from "@/components/ui/collapsable-section";

export default function AboutPage() {
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
}
