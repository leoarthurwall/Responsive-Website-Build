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
`;

const SectionThree = () => {
  const Project = [
    {
      Name: "one",
      bgImage:
        "https://pearsonlloyd.com/wp-content/uploads/2022/10/EDGE-FREE-TILE-1540X1236.jpg",
    },
  ];

  return (
    <ProjectContainer
      style={{ backgroundImage: `url(${Project[0].bgImage})` }}
    ></ProjectContainer>
  );
};

export default SectionThree;
