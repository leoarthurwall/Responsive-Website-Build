import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
// import {
//   CSSTransition,
//   Transition,
//   TransitionGroup,
// } from "react-transition-group";

const SearchContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background-color: ${({ isSearchClicked }) =>
    isSearchClicked ? "#9bad97" : "#fff"};
  opacity: ${({ isSearchClicked }) => (!isSearchClicked ? "0" : "1")};
  transition: all 0.5s;
  visibility: ${({ isSearchClicked }) =>
      !isSearchClicked ? "hidden" : "visible"}
    ${
      "" /* &.active {
    background-color: #9bad97;
  } */
    }
    ${
      "" /* .transition-enter {
    opacity: 0;
  }
  .transition-enter-active {
    opacity: 1;
    transition: opacity 1000ms linear;
  }
  .transition-exit {
    opacity: 1;
  }
  .transition-exit-active {
    opacity: 0;
    transition: opacity 1900ms linear;
  } */
    };
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

  @media (max-width: 768px) {
    font-size: 20px;
    height: 30px;
    padding: 0 5px;
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
  @media (max-width: 768px) {
    padding: 0.8rem 17.5px;
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
  cursor: pointer;
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
const NavSearch = ({
  isSearchClicked,
  setIsSearchClicked,
  handleSearchClick,
}) => {
  return (
    // <CSSTransition
    //   in={isSearchClicked}
    //   timeout={1000}
    //   appear={true}
    //   classNames="transition"
    //   unmountOnExit
    //   onEnter={() => setIsSearchClicked(true)}
    //   onExited={() => setIsSearchClicked(false)}
    // >
    <SearchContainer
      isSearchClicked={isSearchClicked}
      // className={isSearchClicked ? "active" : ""}
    >
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
    // </CSSTransition>
  );
};

export default NavSearch;
