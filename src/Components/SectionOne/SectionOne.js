import React from "react";
import styled from "styled-components";

const SectionOne = () => {
  //STYLES
  const SectionOneImage = styled.div`
    height: 100vh;
    width: 100wv;
    background-image: url("https://pearsonlloyd.com/wp-content/uploads/2022/09/HOMEPAGE-6.jpg");
    position: relative;
  `;

  const Header = styled.h1`
  width: 100%;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: roboto;
    font-weight: 700;
    font-size: 7.6rem;
  `;
  return (
    <SectionOneImage>
      <Header>Design for Change</Header>
    </SectionOneImage>
  );
};

export default SectionOne;
