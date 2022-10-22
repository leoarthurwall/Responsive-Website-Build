import styled from "styled-components"

const MenuContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 998;
    background-color: #fff;
`
const NavMenu = () => {
  return (
    <MenuContainer>NavMenu</MenuContainer>
  )
}

export default NavMenu