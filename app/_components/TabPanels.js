"use client";

import styled from "styled-components";
import TabPanel from "@/app/_components/TabPanel";

const StyledTabPanels = styled.div`
  position: relative;
  width: 100%;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

function TabPanels({ items, selectedTab, primaryKey, secondaryKey }) {
  return (
      <StyledTabPanels>
        {items[selectedTab] && (
            <TabPanel
                item={items[selectedTab]}
                primaryKey={primaryKey}
                secondaryKey={secondaryKey}
            />
        )}
      </StyledTabPanels>
  );
}

export default TabPanels;
