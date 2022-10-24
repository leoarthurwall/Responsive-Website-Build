import styled from "styled-components";
import {
  GrFacebookOption,
  GrInstagram,
  GrTwitter,
  GrLinkedinOption,
} from "react-icons/gr";
import { getByDisplayValue } from "@testing-library/react";
import { AiFillExclamationCircle } from "react-icons/ai";

const MenuContainer = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 40;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: ${({ isMenuClicked }) =>
    !isMenuClicked ? "scale(1.1)" : "scale(1)"};
  background-color: ${({ isMenuClicked }) => isMenuClicked && "#fff"};
  opacity: ${({ isMenuClicked }) => (!isMenuClicked ? "0" : "1")};
  transition: all 0.5s;
  visibility: ${({ isMenuClicked }) => (!isMenuClicked ? "hidden" : "visible")};
`;

const MenuSubContainer = styled.div`
position: relative
height: 100%;
width: 100%
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
  color: #000;

  font-weight: 600;
  text-align: center;
  font-family: inter tight;
  margin: 0;
  transition: color 0.5s;

  cursor: pointer;

  &:hover {
    color: #9bad97;
  }

  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 48px;
  }
`;

const IconContainer = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  left: 50%;
  bottom: 40px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  color: #9bad97;

  @media (max-width: 768px) {
    gap: 0.5rem;

    }
`;

const IconIndividualContainer = styled.div`
  height: 35px;
  width: 35px;

  &:first-child {
    height: 30px;
    width: 30px;
    padding-right: 0.7rem;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.5s;
  cursor: pointer;

  &:hover {
    color: #000;
  }

  @media (max-width: 768px) {
    height: 16px;
    width: 16px;
    &:first-child {
      height: 14px;
      width: 14px;
      padding-right: 0.4rem;

    }
  }
`;

const NavMenu = ({ isMenuClicked, className }) => {
  return (
    <MenuContainer isMenuClicked={isMenuClicked}>
      <MenuSubContainer>
        <TextContainer>
          <MenuText>Work</MenuText>
          <MenuText>About Us</MenuText>
          <MenuText>Thinking</MenuText>
          <MenuText>News</MenuText>
          <MenuText>Contact</MenuText>
        </TextContainer>
        <IconContainer>
          <IconIndividualContainer>
            <GrInstagram size="auto" />
          </IconIndividualContainer>
          <IconIndividualContainer>
            <GrTwitter size="auto" />
          </IconIndividualContainer>
          <IconIndividualContainer>
            <GrFacebookOption size="auto" />
          </IconIndividualContainer>
          <IconIndividualContainer>
            <GrLinkedinOption size="auto" />
          </IconIndividualContainer>
        </IconContainer>
      </MenuSubContainer>
    </MenuContainer>
  );
};

export default NavMenu;
