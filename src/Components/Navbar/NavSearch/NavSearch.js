import styled from "styled-components";

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

const SearchBar = styled.input`
  background-color: rgba(0, 0, 0, 0) !important;
  border: none !important;
  border-bottom: 1px solid #fff !important;
  box-shadow: none !important;
  height: 80px;
  font-size: 62px;
  font-weight: 600;
  color: #fff;
  padding: 0 15px;
  max-width: 935px;

  &:focus {
    outline: none;
    border: none !important;
  }
  ::placeholder {
    color: #fff;
  }
`;

const NavSearch = (isSearchClicked) => {
  return (
    <SearchContainer className={isSearchClicked ? "active" : ""}>
      <SearchBar type="text" placeholder="Search" />
    </SearchContainer>
  );
};

export default NavSearch;
