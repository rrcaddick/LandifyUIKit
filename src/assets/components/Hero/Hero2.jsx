import React from "react";
import styled from "styled-components";
import Header6 from "../Header/Header6";
import H1 from "../styled/H1.styled";
import Lead from "../styled/Lead.styled";
import Button from "../styled/Button.styled";
import Img from "../styled/Img.styled";
import HeroImage from "../../images/Hero2Image.jpg";
import { Colors, Shadows } from "../../Theme";

const HeroEl = styled.section`
  position: relative;
  padding: 0 16.5rem 20rem;
  display: flex;
  flex-direction: column;
  row-gap: 14.5rem;
  width: 100%;
  overflow: hidden;
  :after {
    content: "";
    position: absolute;
    width: 74rem;
    height: 74rem;
    border-radius: 50%;
    right: 0;
    top: 0;
    background-color: ${Colors.Brand.Purple};
    opacity: 0.5;
    z-index: -1;
    transform: translate(15%, -20%);
  }
`;

const Circle = styled.div`
  position: absolute;
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  width: 7.2rem;
  height: 7.2rem;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  z-index: -1;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  perspective: 50rem;
  gap: 4.4rem;
`;

const ContentText = styled.div``;

const Title = styled(H1)`
  margin-bottom: 1.6rem;
`;

const Description = styled(Lead)`
  display: block;
  margin-bottom: 3.2rem;
`;

const StyledImage = styled(Img)`
  border-radius: 0.8rem;
  transform: rotate(-7deg) rotateY(5deg);
  filter: drop-shadow(${Shadows.HeaderImage});
`;

const Hero2 = () => {
  return (
    <HeroEl>
      <Header6 />
      <Circle color={Colors.Brand.Orange800} right="62rem" bottom="30rem" />
      <Circle color={Colors.Brand.Turquoise800} right="35rem" bottom="5rem" />
      <Content>
        <ContentText>
          <Title>Landing page UI kit</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
          </Description>
          <Button size="lg">Get Started</Button>
        </ContentText>

        <StyledImage src={HeroImage} width="50rem" />
      </Content>
    </HeroEl>
  );
};

export default Hero2;
