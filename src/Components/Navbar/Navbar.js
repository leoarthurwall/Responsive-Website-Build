import styled from "styled-components";
import { MagnifyingGlassIcon, Bars3Icon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const NavbarContainer = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2.5rem 2rem;
    box-sizing: border-box;
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
  return (
    <NavbarContainer>
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
