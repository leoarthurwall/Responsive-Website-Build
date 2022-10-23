import styled from "styled-components";
import { useState, useEffect } from "react";
import NavMenu from "./NavMenu/NavMenu";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { SlMagnifier } from "react-icons/sl";

const NavbarContainer = styled.div`
  position: fixed;
  z-index: 50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2.5rem 2rem;
  box-sizing: border-box;
  transition: 0.5s ease;

  &.active {
    background-color: white;
    padding: 0.8rem 2rem;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Name = styled.h2`
  color: black;
  margin: 0;
  font-family: inter;
`;
const Button = styled.div`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
`;

const Navbar = () => {
  const [offset, setOffset] = useState(0);
  const [isUpper, setIsUpper] = useState(false);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const handleScroll = () => setOffset(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (offset > 0) {
      setIsUpper(true);
    } else {
      setIsUpper(false);
    }
  }, [offset]);

  const handleMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  

  return (
    <>
      <NavbarContainer className={isUpper ? "active" : ""}>
        <Left>
          <Name>Pearson Lloyd</Name>
        </Left>
        <Right>
          <SlMagnifier style={{ height: "40px", width: "40px" }} />
          <Button onClick={handleMenuClick}>
            {isMenuClicked ? (
              <AiOutlineMenu style={{ height: "40px", width: "40px" }} />
            ) : (
              <AiOutlineClose style={{ height: "40px", width: "40px" }} />
            )}
          </Button>
        </Right>
      </NavbarContainer>

      {isMenuClicked && <NavMenu isMenuClicked={isMenuClicked} />}
    </>
  );
};

export default Navbar;
