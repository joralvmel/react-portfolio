import styled from "styled-components";
import TechList from "./TechList";
import ProjectLinks from "./ProjectLinks";
import Image from "next/image";
import { useMobile } from "@/app/_context/MobileContext";
import { useState } from "react";
import Spinner from "./Spinner";

const StyledProject = styled.li`
  display: flex;
  list-style: none;
  align-items: center;
  padding: 10px 0;
  flex-direction: ${({ $isEven }) => ($isEven ? "row" : "row-reverse")};

  .project-title {
    color: var(--color-text);
    font-size: var(--fs-xxl);
  }

  .project-details {
    width: 50%;
    padding: 2rem;
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
      background-color: transparent;
      color: transparent;
    }
  }
`;

const StyledMobileProject = styled.li`
  display: flex;
  list-style: none;
  padding: 20px 0;
  flex-direction: column;

  .project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .project-title {
    margin: 0;
  }

  .project-details {
    padding: 20px;
  }

  .project-description {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px 3px;
    background-color: var(--color-image-overlay);
    color: var(--color-text-light);
    font-size: var(--fs-md);
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
  }
`;

const StyledPic = styled.div`
  width: ${({ $isMobile }) => ($isMobile ? "100%" : "420px")};
  height: ${({ $isMobile }) => ($isMobile ? "200px" : "100%")};
  position: relative;
  overflow: hidden;
`;

function Project({ project, index }) {
  const { isMobile } = useMobile();
  const [loading, setLoading] = useState(true);

  const { title, description, technologies, image, github, external } = project;

  const handleImageLoad = () => {
    setLoading(false);
  };

  const isEven = index % 2 === 0;

  return isMobile ? (
    <StyledMobileProject>
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        <ProjectLinks github={github} external={external} />
      </div>

      <StyledPic $isMobile={isMobile}>
        {loading && <Spinner />}
        <Image
          src={image.src}
          alt={image.alt}
          priority={true}
          onLoad={handleImageLoad}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loader={({ src, width }) => `${src}?w=${width}`}
          placeholder="blur"
        />
        <div className="project-description">
          <span>{description}</span>
          <TechList technologies={technologies} />
        </div>
      </StyledPic>
    </StyledMobileProject>
  ) : (
    <StyledProject $isEven={isEven}>
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <TechList technologies={technologies} />
        <ProjectLinks github={github} external={external} />
      </div>
      <StyledPic $isMobile={isMobile}>
        {loading && <Spinner />}
        <Image
          src={image.src}
          alt={image.alt}
          priority={true}
          onLoad={handleImageLoad}
          style={{
            width: "100%",
            height: "auto",
          }}
          placeholder="blur"
        />
        <div className="project-description">{description}</div>
      </StyledPic>
    </StyledProject>
  );
}

export default Project;
