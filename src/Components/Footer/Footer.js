import styled from "styled-components";
import {
  GrFacebookOption,
  GrInstagram,
  GrTwitter,
  GrLinkedinOption,
} from "react-icons/gr";

const FooterBackground = styled.div`
  width: 100vw;
  background-color: #9bad97;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 90rem;
  margin-left: auto;
  margin-right: auto;
  padding: 37px 2.9rem 133px 2.9rem;
  box-sizing: border-box;

  @media (max-width: 950px) {
    flex-direction: column;
    gap: 1rem;
    padding: 35px 17.5px 35px 17.5px;

  }
`;
const FooterSubContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
`;
const FooterSubContainerLast = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  text-align: left;
`;
const FooterHeader = styled.h2`
  font-family: inter;
  color: #fff;
  margin: 0;

  width: fit-content;
  transition: color 0.5s;
  cursor: pointer;
  &:hover {
    color: #c8d1c6;
  }
`;

const UList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  line-height: 25px;
  font-weight: 600;
  font-size: 18px;
`;
const ListItem = styled.li`
  font-family: inter tight;
  color: #fff;

  width: fit-content;
  transition: color 0.5s;
  cursor: pointer;
  &:hover {
    color: #c8d1c6;
  }
`;
const ListNoHover = styled.li`
  font-family: inter tight;
  color: #fff;
`;
const IconContainer = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: left;
  color: #fff;
  gap: 0.1rem;
`;
const IconIndividualContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transition: color 0.5s;
  cursor: pointer;

  &:hover {
    color: #c8d1c6;
  }
`;

const Footer = () => {
  return (
    <FooterBackground>
      <FooterContainer>
        <FooterSubContainer>
          <FooterHeader>Pearson Lloyd</FooterHeader>
        </FooterSubContainer>
        <FooterSubContainer>
          <UList>
            <ListItem>Work</ListItem>
            <ListItem>News</ListItem>
            <ListItem>Recognition</ListItem>
            <ListItem>Press</ListItem>
            <ListItem>Jobs</ListItem>
            <ListItem>Contact</ListItem>
          </UList>
        </FooterSubContainer>
        <FooterSubContainer>
          <UList>
            <ListNoHover>1-3 Yorkton Street</ListNoHover>
            <ListNoHover>London E2 8NH</ListNoHover>
            <ListItem> +44 (0)20 7033 4440 </ListItem>
            <ListItem>Yorkton Workshops</ListItem>
            <ListItem>info@pearsonlloyd.com</ListItem>
          </UList>
        </FooterSubContainer>
        <FooterSubContainerLast>
          <UList>
            <ListNoHover> Pearson Lloyd Design Ltd</ListNoHover>
            <ListNoHover>Registered No 4579758</ListNoHover>
          </UList>
          <IconContainer>
            <IconIndividualContainer>
              <GrInstagram style={{ "margin-right": "0.4rem" }} size={22} />
            </IconIndividualContainer>
            <IconIndividualContainer>
              <GrTwitter size={24} />
            </IconIndividualContainer>
            <IconIndividualContainer>
              <GrFacebookOption size={24} />
            </IconIndividualContainer>
            <IconIndividualContainer>
              <GrLinkedinOption size={24} />
            </IconIndividualContainer>
          </IconContainer>
        </FooterSubContainerLast>
      </FooterContainer>
    </FooterBackground>
  );
};

export default Footer;
