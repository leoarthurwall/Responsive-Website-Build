import styled from "styled-components";
import "../../App.css";

const ProjectContainer = styled.div`
  height: 642px;
  background-position: 50%;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-top: 15px;
  position: relative;
  gap: 1rem;
`;

const ProjectClient = styled.h2`
  color: white;
  font-family: Prompt;
  font-weight: 500;
  font-size: 3.4rem;
`;
const ProjectName = styled.h2`
  color: white;
  font-family: Prompt;
  font-weight: 200;
  font-size: 3.4rem;
`;
const ViewAll = styled.h2`
  font-size:30px;
  text-align:center;
  font-family: inter tight;
  margin 59px 0;
`


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
          <ProjectContainer
            key={i}
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <ProjectClient>{project.Client} </ProjectClient>
            <ProjectName>{project.Name}</ProjectName>
          </ProjectContainer>
        );
      })}
      <ViewAll>View all</ViewAll>
    </>
  );
};

export default SectionThree;
