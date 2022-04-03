import React from "react";
import styled from "styled-components";
import Header5 from "../Header/Header5";
import H1 from "../styled/H1.styled";
import Lead from "../styled/Lead.styled";
import Button from "../styled/Button.styled";
import HeroImage from "../../images/HeroImage5.svg";

const HeroEl = styled.section`
  position: relative;
  padding: 0 16.5rem 30rem;
  display: flex;
  flex-direction: column;
  row-gap: 15rem;
  width: 100%;
  overflow: hidden;
  background-image: url(${HeroImage});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  perspective: 50rem;
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

const Hero5 = () => {
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
      </Content>
    </HeroEl>
  );
};

export default Hero5;
