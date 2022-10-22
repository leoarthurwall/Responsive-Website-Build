import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9bad97;
  height: 50px;
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

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubContainer>
        <FooterText>FooterText</FooterText>
      </FooterSubContainer>
      <FooterSubContainer>
        <FooterText>FooterText</FooterText>
      </FooterSubContainer>
      <FooterSubContainer>
        <FooterText>FooterText</FooterText>
      </FooterSubContainer>
      <FooterSubContainer>
        <FooterText>FooterText</FooterText>
      </FooterSubContainer>
    </FooterContainer>
  );
};

export default Footer;
