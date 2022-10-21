import styled from "styled-components";

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
        "https://pearsonlloyd.com/wp-content/uploads/2022/08/AVRO-TILE.png",
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
      <ProjectContainer
        style={{ backgroundImage: `url(${Project[0].bgImage})` }}
      ></ProjectContainer>
      <ProjectContainer
        style={{ backgroundImage: `url(${Project[1].bgImage})` }}
      ></ProjectContainer>
    </>
  );
};

export default SectionThree;
