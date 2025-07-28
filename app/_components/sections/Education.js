"use client";

import { useLanguage } from "@/app/_context/LanguageContext";
import TabSection from "@/app/_components/TabSection";

function Education() {
    const { config } = useLanguage();
    const { header, schools } = config.education;

    return (
        <TabSection
            id="education"
            header={header}
            items={schools}
            tabLabelKey="institution"
            primaryKey="degree"
            secondaryKey="institution"
        />
    );
}

export default Education;
