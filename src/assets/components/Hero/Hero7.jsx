import React from "react";
import styled from "styled-components";
import Header7 from "../Header/Header7";
import H1 from "../styled/H1.styled";
import Lead from "../styled/Lead.styled";
import Button from "../styled/Button.styled";
import Img from "../styled/Img.styled";
import HeroImage from "../../images/Hero7Image.svg";

const HeroEl = styled.section`
  position: relative;
  padding: 0 16.5rem 30rem;
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

const Hero5 = () => {
  return (
    <HeroEl>
      <Header7 />
      <Content>
        <ContentText>
          <Title>Landing page UI kit</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
          </Description>
          <Button size="lg">Get Started</Button>
        </ContentText>
        <div>
          <Img src={HeroImage} />
        </div>
      </Content>
    </HeroEl>
  );
};

export default Hero5;
