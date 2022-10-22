import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9bad97;
  width: 100vw;
  padding: 0 10rem;
  box-sizing: border-box;
`;
const FooterSubContainer = styled.div`
  display: flex;
  width: 100%;

  justify-content: space-between;
  align-items: center;
  text-align: left;
`;
const FooterText = styled.p`
  font-family: inter;
  color: #fff;
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
const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubContainer>
        <FooterText>Pearson Lloyd</FooterText>
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
        <FooterText>FooterText</FooterText>
      </FooterSubContainer>
    </FooterContainer>
  );
};

export default Footer;
