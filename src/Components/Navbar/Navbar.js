import styled from "styled-components";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

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

const Navbar = () => {
  const [offset, setOffset] = useState(0);
  const [isUpper, setIsUpper] = useState(false);

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


  return (
    <NavbarContainer className={isUpper ? "active" : ""}>
      <Left>
        <Name>Pearson Lloyd</Name>
      </Left>
      <Right>
        <MagnifyingGlassIcon style={{ height: "40px", width: "40px" }} />
        <Bars3Icon style={{ height: "40px", width: "40px" }} />
      </Right>
    </NavbarContainer>
  );
};

export default Navbar;
