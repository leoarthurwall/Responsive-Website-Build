import styled from "styled-components";

const Navbar = () => {

    const NavbarContainer = styled.div`
    position: absolute;
    top: 0;
    display: flex;
    justify-content: space between;
    align-items; center;
    width: 100%;
    padding: 2rem 2rem;
    `
    const Left = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const Name = styled.h2`
    color: black;
    margin: 0;
    `
  return (
    <NavbarContainer>
        <Left>
            <Name>Pearson Lloyd</Name>
        </Left>
    </NavbarContainer>
  )
}

export default Navbar