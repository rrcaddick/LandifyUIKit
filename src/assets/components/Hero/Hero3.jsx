import React from "react";
import styled from "styled-components";
import Header7 from "../Header/Header7";
import H1 from "../styled/H1.styled";
import Button from "../styled/Button.styled";
import Img from "../styled/Img.styled";
import PhoneMockup from "../../images/PhoneMockup.svg";
import { Shadows } from "../../Theme";
import HeroBackground from "../../images/HeroBackground.svg";

const HeroEl = styled.section`
  padding: 0 16.5rem 5.8rem;
  display: flex;
  flex-direction: column;
  row-gap: 8rem;
  width: 100%;
  background: url(${HeroBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 3rem;
`;

const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 3rem;
`;

const Title = styled(H1)`
  margin-top: 7.2rem;
`;

const Image = styled(Img)`
  filter: drop-shadow(${Shadows.MobileMockup});
`;

const Hero3 = () => {
  return (
    <HeroEl>
      <Header7 />
      <Content>
        <ContentText>
          <Title>Organise projects. Get more done.</Title>
          <Button size="lg">Get Started</Button>
        </ContentText>
        <Image src={PhoneMockup} />
      </Content>
    </HeroEl>
  );
};

export default Hero3;
