import styled from "styled-components"

const SearchContainer = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 40;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 1s ease-in;
  &.active {
    background-color: #9bad97;
  }
`;
const NavSearch = (isSearchClicked) => {
  return (
    <SearchContainer className={isSearchClicked ? "active" : ""}>Search</SearchContainer>
  )
}

export default NavSearch