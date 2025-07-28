"use client";

import { useLanguage } from "@/app/_context/LanguageContext";
import TabSection from "@/app/_components/TabSection";

function Experience() {
  const { config } = useLanguage();
  const { header, jobs } = config.experience;

  return (
      <TabSection
          id="experience"
          header={header}
          items={jobs}
          tabLabelKey="company"
          primaryKey="position"
          secondaryKey="company"
      />
  );
}

export default Experience;
