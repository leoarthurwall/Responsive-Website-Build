import styled from "styled-components";
import "../../App.css";

const ProjectContainer = styled.div`
  height: 642px;
  max-width: 100vw;
  background-position: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 15px;
  position: relative;
  gap: 1rem;

  cursor: pointer;
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  transition: all 0.5s;

  &:hover {
    transform: scale(1.15);
    background-blend-mode: overlay;
    background-color: #ad7252;
    opacity: 0.75;
  }
`;
const ProjectName = styled.h2`
  position: absolute;
  color: white;
  font-family: Prompt;
  font-weight: 200;
  font-size: 3.4rem;
  @media (max-width: 1024px) {
    font-size: 25px;
  }
`;
const ViewAllContainer = styled.div`
display:flex;
justify-content: center;
align-items: center;
margin: 59px 0;

`
const ViewAll = styled.h2`
  font-size: 30px;
  font-family: inter tight;
  color: #000;
  width: fit-content;
  transition: color 0.5s;
  cursor: pointer;

  &:hover {
    color: #9bad97;
  }
`;

const SectionThree = () => {
  const Project = [
    {
      Client: "Modus",
      Name: "Edge Free",
      bgImage:
        "https://pearsonlloyd.com/wp-content/uploads/2022/10/EDGE-FREE-TILE-1540X1236.jpg",
    },
    {
      Client: "LDF 2022",
      Name: "Change Making",
      bgImage:
        "https://pearsonlloyd.com/wp-content/uploads/2022/09/LDF-tile-image1-pdf.jpg",
    },
    {
      Client: "Profim",
      Name: "Revo",
      bgImage:
        "https://pearsonlloyd.com/wp-content/uploads/2022/05/PROJECT-TILE-TEMPLATE-1540X1236-2.jpg",
    },
    {
      Client: "Arconas",
      Name: "Avro",
      bgImage:
        "https://pearsonlloyd.com/wp-content/uploads/2022/08/AVRO-TILE.png",
    },
    {
      Client: "Bene",
      Name: "bFRIENDS",
      bgImage:
        "https://pearsonlloyd.com/wp-content/uploads/2021/11/PROJECT-TILE-TEMPLATE-1540X1236.jpg",
    },
  ];

  return (
    <>
      {Project.map((project, i) => {
        return (
          <ProjectContainer key={i}>
            <ProjectImage
              style={{ backgroundImage: `url(${project.bgImage})` }}
            />
            <ProjectName>
              <span style={{ fontWeight: "600" }}>{project.Client}</span>{" "}
              {project.Name}
            </ProjectName>
          </ProjectContainer>
        );
      })}
      <ViewAllContainer>
        <ViewAll>View all</ViewAll>
      </ViewAllContainer>
    </>
  );
};

export default SectionThree;
