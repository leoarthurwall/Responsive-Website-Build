import styled from "styled-components";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";

const Navbar = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  const Nav = styled.div`
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
    transition: all ease 0.85s;
  `;
  const ActiveNavbarContainer = styled(NavbarContainer)`
    background-color: white;
    padding 1rem 2rem;
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

  const handleOffset = (e) => {
    const position = window.pageYOffset;
    setScrollOffset(position);
    console.log(position)
  };

  return (
    <Nav onChange={handleOffset}>
      {scrollOffset > 0 ? (
        <ActiveNavbarContainer>
          <Left>
            <Name>Pearson Lloyd</Name>
          </Left>
          <Right>
            <MagnifyingGlassIcon style={{ height: "40px", width: "40px" }} />
            <Bars3Icon style={{ height: "40px", width: "40px" }} />
          </Right>
        </ActiveNavbarContainer>
      ) : (
        <NavbarContainer>
          <Left>
            <Name>Pearson Lloyd</Name>
          </Left>
          <Right>
            <MagnifyingGlassIcon style={{ height: "40px", width: "40px" }} />
            <Bars3Icon style={{ height: "40px", width: "40px" }} />
          </Right>
        </NavbarContainer>
      )}
    </Nav>
  );
};

export default Navbar;
