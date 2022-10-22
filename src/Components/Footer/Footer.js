import styled from "styled-components";

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

  justify-content: space-between;
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
  display: flex;
  align-items: center;
  justify-content: srart;
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
      <FooterSubContainer>
        <UList>
          <ListItem> Pearson Lloyd Design Ltd</ListItem>
          <ListItem>Registered No 4579758</ListItem>
        </UList>
        <IconContainer></IconContainer>
      </FooterSubContainer>
    </FooterContainer>
  );
};

export default Footer;
