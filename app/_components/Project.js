import styled from "styled-components";
import TechList from "./TechList";
import ProjectLinks from "./ProjectLinks";
import { useState, useEffect } from "react";

const StyledProject = styled.li`
  display: flex;
  list-style: none;
  padding: 20px 0;
  flex-direction: ${({ $isEven }) => ($isEven ? "row" : "row-reverse")};

  .project-title {
    color: var(--color-text);
    font-size: var(--fs-xxl);
  }

  .project-details {
    width: 50%;
    padding: 20px;
  }

  .project-description {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 25px 5px;
    background-color: var(--color-image-overlay);
    color: var(--color-text-light);
    font-size: var(--fs-lg);
    z-index: 1;
    display: flex;
    align-items: center;
    text-align: center;

    &:hover {
      transition: var(--transition-image);
      background-color: var(--color-image-overlay);
      color: var(--color-text-light);
    }
  }

  @media (max-width: 768px) {
    .project-description {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding: 0;
      background-color: var(--color-image-overlay);
      color: var(--color-text-light);
      font-size: var(--fs-lg);
      z-index: 1;
      display: flex;
      align-items: center;
      text-align: center;

      &:hover {
        transition: var(--transition-image);
        background-color: transparent;
        color: transparent;
      }
    }
  }
`;

const StyledPic = styled.div`
  width: 50%;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0;
  }
`;

function Project({ project, index }) {
  const { title, description, technologies, image, github, external } = project;

  const isEven = index % 2 === 0;

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <StyledProject $isEven={isEven}>
          <StyledPic>
            {image}
            <div className="project-details">
              <h3 className="project-title">{title}</h3>
              <div className="project-description">{description}</div>
              <TechList technologies={technologies} />
              <ProjectLinks github={github} external={external} />
            </div>
          </StyledPic>
        </StyledProject>
      ) : (
        <StyledProject $isEven={isEven}>
          <div className="project-details">
            <h3 className="project-title">{title}</h3>
            <TechList technologies={technologies} />
            <ProjectLinks github={github} external={external} />
          </div>
          <StyledPic>
            {image}
            <div className="project-description">{description}</div>
          </StyledPic>
        </StyledProject>
      )}
    </div>
  );
}

export default Project;
