import styled from "styled-components";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrollOffset, setScrollOffset] = useState(false);

  const Nav = styled.nav`
    width: 100%;
  `;
  const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    z-index: 50;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2.5rem 2rem;
    box-sizing: border-box;
    transition: 1s ease;
    &.active {
      background-color: white;
      padding: 1rem 2rem;
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

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY > 0) {
      setScrollOffset(true);
    } else {
      setScrollOffset(false);
    }
  };
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <Nav>
      <NavbarContainer className={scrollOffset ? "active" : ""}>

        <Left>
          <Name>Pearson Lloyd</Name>
        </Left>
        <Right>
          <MagnifyingGlassIcon style={{ height: "40px", width: "40px" }} />
          <Bars3Icon style={{ height: "40px", width: "40px" }} />
        </Right>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
