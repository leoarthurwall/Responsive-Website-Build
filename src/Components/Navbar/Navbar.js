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
    padding: 2rem 2rem;
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
  `;
  const Name = styled.h2`
    color: black;
    margin: 0;
  `;
  return (
    <NavbarContainer>
      <Left>
        <Name>Pearson Lloyd</Name>
        <MagnifyingGlassIcon style={{color: "white", fontSize: "1rem"}}/>
      </Left>
      <Right>
      <Name>Pearson Lloyd</Name>

        <Bars3Icon />
      </Right>
    </NavbarContainer>
  );
};

export default Navbar;
