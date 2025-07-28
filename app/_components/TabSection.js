"use client";

import { useState } from "react";
import styled from "styled-components";

import TabPanels from "@/app/_components/TabPanels";
import TabList from "@/app/_components/TabList";
import RevealOnScroll from "@/app/_components/RevealOnScroll";

const StyledTabSection = styled.section`
  max-width: 900px;

  .inner {
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
`;

function TabSection({
                        id,
                        header,
                        items,
                        tabLabelKey,
                        primaryKey,
                        secondaryKey
                    }) {
    const [selectedTab, setSelectedTab] = useState(0);

    function handleTabClick(index) {
        setSelectedTab(index);
    }

    return (
        <RevealOnScroll>
            <StyledTabSection id={id}>
                <h2 className="numbered-heading">{header}</h2>
                <RevealOnScroll>
                    <div className="inner">
                        <TabList
                            items={items}
                            handleTabClick={handleTabClick}
                            selectedTab={selectedTab}
                            tabLabelKey={tabLabelKey}
                        />
                        <TabPanels
                            items={items}
                            selectedTab={selectedTab}
                            primaryKey={primaryKey}
                            secondaryKey={secondaryKey}
                        />
                    </div>
                </RevealOnScroll>
            </StyledTabSection>
        </RevealOnScroll>
    );
}

export default TabSection;