import styled from "styled-components";
import TechList from "./TechList";
import ProjectLinks from "./ProjectLinks";

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
`;

const StyledPic = styled.div`
  width: 50%;
  position: relative;
  overflow: hidden;

  a {
    width: 100%;
    height: 100%;
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

function Project({ project, index }) {
  const {
    title,
    description,
    technologies,
    image,
    github,
    external,
    externalTitle,
  } = project;

  const isEven = index % 2 === 0;

  return (
    <StyledProject $isEven={isEven}>
      <div className="project-details">
        <h3 className="project-title">{title}</h3>
        <TechList technologies={technologies} />
        <ProjectLinks github={github} external={external} />
      </div>
      <StyledPic>
        {external && (
          <a
            href={external}
            target="_"
            rel="noopener noreferrer"
            title={externalTitle}
          >
            {image}
            <div className="project-description">{description}</div>
          </a>
        )}
      </StyledPic>
    </StyledProject>
  );
}

export default Project;
