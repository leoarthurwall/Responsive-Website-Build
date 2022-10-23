import styled from "styled-components";

const MenuContainer = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 40;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 1s ease-in;

  &.active {
    background-color: #fff;
  }
`;

const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 6%;
  
`;
const MenuText = styled.h2`
  font-size: 60px;
  font-weight: 600;
  text-align: center;
  font-family: inter tight;
  margin:0;
`;
const NavMenu = (isMenuClicked) => {
  return (
    <MenuContainer className={isMenuClicked ? "active" : ""}>
      <TextContainer>
        <MenuText>Work</MenuText>
        <MenuText>About Us</MenuText>
        <MenuText>Thinking</MenuText>
        <MenuText>News</MenuText>
        <MenuText>Contact</MenuText>
      </TextContainer>
    </MenuContainer>
  );
};

export default NavMenu;
