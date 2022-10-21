import styled from "styled-components";

const TextContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5%;
  box-sizing: border-box;
`;

const Paragraph = styled.p`
  font-family: neue-haas-grotesk-display, Helvetica, Roboto, Arial, sans-serif;
  font-weight: 300;
  width: 70%;
  text-align:left;
  font-size: 24px;
`;

const SectionTwo = () => {
  return (
    <TextContainer>
      <Paragraph>We see design as above all an act of making.</Paragraph>
      <Paragraph>
        Pearson Lloyd is a design office based in East London. Founded in 1997
        and led by Luke Pearson and Tom Lloyd, the studio works with
        manufacturers, brands and public bodies to identify and build products,
        spaces and services that respond to the challenges of the day and
        enhance our experience of the world.
      </Paragraph>
    </TextContainer>
  );
};

export default SectionTwo;
