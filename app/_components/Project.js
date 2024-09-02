import styled from "styled-components";
import TechList from "./TechList";
import ProjectLinks from "./ProjectLinks";
import Image from "next/image";
import { useState } from "react";
import Spinner from "./Spinner";
import { useLanguage } from "../_context/LanguageContext";

const StyledProject = styled.li`
  display: flex;
  flex-direction: column;
  flex: 1 1 calc(50% - 16px);
  border: 1px solid var(--color-border);
  background-color: var(--color-tertiary);
  border-radius: 8px;
  overflow: hidden;
  list-style: none;

  &:hover {
    background-color: var(--color-quaternary);
    transition: var(--transition-background);
  }

  .project-info {
    padding: 20px;

    .project-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;

      .left {
        display: flex;
        align-items: center;
        gap: 10px;

        .folder {
          color: var(--color-accent);
          svg {
            width: 30px;
            height: 30px;
          }
        }

        .project-title {
          color: var(--color-text);
          font-size: var(--fs-xxl);
          margin: 0;
        }
      }
    }
  }

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .project-details {
    padding: 10px 0;
  }

  .project-description {
    padding: 20px 0;
    color: var(--color-text-light);
    font-size: var(--fs-lg);
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;

    .project-title {
      font-size: var(--fs-xl);
    }

    .project-description {
      font-size: var(--fs-md);
    }
  }
`;

const StyledPic = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
`;

function Project({ project }) {
  const { config } = useLanguage();
  const [loading, setLoading] = useState(true);
  const { title, description, technologies, image, github, external } = project;
  const { folder } = config.icons;

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <StyledProject>
      {image && (
        <StyledPic>
          {loading && <Spinner />}
          <Image
            src={image.src}
            alt={image.alt}
            onLoad={handleImageLoad}
            style={{
              width: "100%",
              height: "auto",
            }}
            placeholder="blur"
          />
        </StyledPic>
      )}
      <div className="project-info">
        <div className="project-top">
          <div className="left">
            {!image && <div className="folder">{folder}</div>}
            <h3 className="project-title">{title}</h3>
          </div>
          <ProjectLinks github={github} external={external} />
        </div>
        <div className="project-description">{description}</div>
        <TechList technologies={technologies} />
      </div>
    </StyledProject>
  );
}

export default Project;
