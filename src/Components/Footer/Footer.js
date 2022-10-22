import styled from "styled-components";
import {
  GrFacebookOption,
  GrInstagram,
  GrTwitter,
  GrLinkedinOption,
} from "react-icons/gr";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #9bad97;
  width: 100vw;
  padding: 37px 10rem 133px 10rem;
  box-sizing: border-box;
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
`;

const UList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li`
  font-family: inter;
  color: #fff;
`;
const IconContainer = styled.div`
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: left;
  color: #fff;
  gap: 0.2rem;
`;

const Footer = () => {
  return (
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
          <ListItem>1-3 Yorkton Street</ListItem>
          <ListItem>London E2 8NH</ListItem>
          <ListItem> +44 (0)20 7033 4440 </ListItem>
          <ListItem>http://www.yorktonworkshops.com/</ListItem>
          <ListItem>info@pearsonlloyd.com</ListItem>
        </UList>
      </FooterSubContainer>
      <FooterSubContainerLast>
        <UList>
          <ListItem> Pearson Lloyd Design Ltd</ListItem>
          <ListItem>Registered No 4579758</ListItem>
        </UList>
        <IconContainer>
          <GrInstagram size={24} />
          <GrTwitter size={24} />
          <GrFacebookOption size={24} />
          <GrLinkedinOption size={24} />
        </IconContainer>
      </FooterSubContainerLast>
    </FooterContainer>
  );
};

export default Footer;
