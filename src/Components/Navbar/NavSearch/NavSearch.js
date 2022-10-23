import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

const SearchContainer = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 60;
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
  }
  ::placeholder {
    color: #fff;
  }
`;

const NavbarContainer = styled.div`
  position: absolute;
  top: 0;
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
  color: white;

`;
const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  display: flex;
  justify-content: center;
  align-itmes: center;
  color: white;
`;
const NavSearch = ({isSearchClicked, handleSearchClick}) => {
  return (
    <SearchContainer className={isSearchClicked ? "active" : ""}>
      <NavbarContainer>
        <Left>
          <Name>Pearson Lloyd</Name>
        </Left>
        <Right>
          <Button onClick={handleSearchClick}>
            <AiOutlineClose style={{ height: "40px", width: "40px" }} />
          </Button>
        </Right>
      </NavbarContainer>
      <SearchBar type="text" placeholder="Search" />
    </SearchContainer>
  );
};

export default NavSearch;
