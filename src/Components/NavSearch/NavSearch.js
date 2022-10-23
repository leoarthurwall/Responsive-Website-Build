import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { SlMagnifier } from "react-icons/sl";

const SearchContainer = styled.div`
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 100;
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
const Button = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  outline: inherit;
  display: flex;
  justify-content: center;
  align-itmes: center;
`;


const NavSearch = (setIsSearchClicked, isSearchClicked) => {
  const handleSearchClick = () => {
    setIsSearchClicked(!isSearchClicked);
    console.log("isSearchClicked")
  };
  return (
    <SearchContainer className={isSearchClicked ? "active" : ""}>
    <Left>
          <Name>Pearson Lloyd</Name>
        </Left>
        <Right>
          <Button onClick={handleSearchClick}>
            {isSearchClicked ? (
              <AiOutlineClose style={{ height: "40px", width: "40px" }} />
            ) : (
              <SlMagnifier style={{ height: "30px", width: "30px" }} />
            )}
          </Button>
        </Right>
      <SearchBar type="text" placeholder="Search" />
    </SearchContainer>
  );
};

export default NavSearch;
