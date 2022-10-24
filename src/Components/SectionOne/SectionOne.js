import styled from "styled-components";

const SectionOne = () => {
  //STYLES
  const SectionOneImage = styled.div`
    height: 100vh;
    background-position: 50%;
    background-size: cover;
    position: relative;
    background-image: url("https://pearsonlloyd.com/wp-content/uploads/2022/09/HOMEPAGE-6.jpg");
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
  `;

  const Header = styled.h1`
    width: 90%;
    color: white;
    font-family: inter;
    font-weight: 600;
    font-size: 8.4rem;
    @media (max-width: 1024px) {
    font-size: 42px;
  }

  `;
  return (
    <SectionOneImage>
      <Header>Design for Change</Header>
    </SectionOneImage>
  );
};

export default SectionOne;
