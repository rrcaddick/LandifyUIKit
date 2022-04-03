import React from "react";
import styled from "styled-components";
import Header5 from "../Header/Header5";
import H1 from "../styled/H1.styled";
import Lead from "../styled/Lead.styled";
import Button from "../styled/Button.styled";
import Img from "../styled/Img.styled";
import HeroImage from "../../images/Hero4Image.png";
import { Colors, Shadows } from "../../Theme";

const HeroEl = styled.section`
  position: relative;
  padding: 0 16.5rem 15rem;
  display: flex;
  flex-direction: column;
  row-gap: 15rem;
  width: 100%;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4.4rem;
`;

const ContentText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const Title = styled(H1)`
  margin-bottom: 1.6rem;
`;

const Description = styled(Lead)`
  display: block;
  margin-bottom: 3.2rem;
`;

const ContentImage = styled.div`
  position: relative;
  width: 50%;
  transform: translateX(15rem);
  :after {
    content: "";
    position: absolute;
    top: -8rem;
    left: -11.7rem;
    width: 64rem;
    height: 64rem;
    border-radius: 50%;
    background-color: ${Colors.Brand.Purple800};
    z-index: -1;
  }
`;

const StyledImage = styled(Img)`
  border-radius: 0.8rem;
  filter: drop-shadow(${Shadows.HeaderImage});
  width: 77rem;
`;

const Hero4 = () => {
  return (
    <HeroEl>
      <Header5 />
      <Content>
        <ContentText>
          <Title>Landing page UI kit</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
          </Description>
          <Button size="lg">Get Started</Button>
        </ContentText>
        <ContentImage>
          <StyledImage src={HeroImage} />
        </ContentImage>
      </Content>
    </HeroEl>
  );
};

export default Hero4;
