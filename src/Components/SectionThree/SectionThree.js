import styled from "styled-components";

const SectionThreeImage = styled.div`
height: 100vh;
background-position: 50%;
background-size: cover;
position: relative;
background-image: url('https://pearsonlloyd.com/wp-content/uploads/2022/10/EDGE-FREE-TILE-1540X1236.jpg');
display: flex;
justify-content: center;
align-items: center;

`;


const SectionThree = () => {
  return (
    <SectionThreeImage></SectionThreeImage>
  )
}

export default SectionThree