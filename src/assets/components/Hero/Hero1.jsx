import React from "react";
import styled from "styled-components";
import Header7 from "../Header/Header7";
import H1 from "../styled/H1.styled";
import Button from "../styled/Button.styled";
import Img from "../styled/Img.styled";
import PhoneMockup from "../../images/PhoneMockup.svg";
import { Colors, Shadows } from "../../Theme";

const HeroEl = styled.section`
  padding: 0 16.5rem 5.8rem;
  display: flex;
  flex-direction: column;
  row-gap: 8rem;
  width: 100%;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3.2rem;
`;

const Title = styled(H1)`
  margin-top: 7.2rem;
  text-align: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 32rem;
`;

const Image = styled(Img)`
  position: absolute;
  filter: drop-shadow(${Shadows.MobileMockup});
`;

const Circle = styled.div`
  position: absolute;
  height: 120rem;
  width: 120rem;
  background-color: ${Colors.Brand.Purple800};
  border-radius: 50%;
  transform: translateY(15%);
  z-index: -1;
`;

const Hero1 = () => {
  return (
    <HeroEl>
      <Header7 />
      <Content>
        <ContentText>
          <Title>Track your product sales from anywhere, anytime.</Title>
          <Button size="lg">Start Selling</Button>
        </ContentText>
        <ImageContainer>
          <Image src={PhoneMockup} />
          <Circle />
        </ImageContainer>
      </Content>
    </HeroEl>
  );
};

export default Hero1;
