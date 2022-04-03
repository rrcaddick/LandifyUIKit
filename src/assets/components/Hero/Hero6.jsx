import React from "react";
import styled from "styled-components";
import Header3 from "../Header/Header3";
import H1 from "../styled/H1.styled";
import Lead from "../styled/Lead.styled";
import Button from "../styled/Button.styled";
import HeroImage from "../../images/Hero6Image.jpg";
import { TextStyles, Colors } from "../../Theme";

const HeroEl = styled.section`
  position: relative;
  padding: 0 16.5rem 30rem;
  display: flex;
  flex-direction: column;
  row-gap: 15rem;
  width: 100%;
  overflow: hidden;
  background-image: url(${HeroImage}), linear-gradient(#d9e8ef 0%, #eaf2f5 100%);
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
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

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Line = styled.div`
  width: 8rem;
  height: 2px;
  background-color: ${Colors.Text.Gray900};
`;

const ButtonText = styled.span`
  ${TextStyles.Bundler(TextStyles.Others.Capatalized)}
  color: ${Colors.Text.Gray900}
`;

const Hero6 = () => {
  return (
    <HeroEl>
      <Header3 />
      <Content>
        <ContentText>
          <Title>Workspace that inspire</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
          </Description>
          <StyledButton size="lg" styleType="outline">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="23" stroke="#18191F" stroke-width="2" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.2275 17.201C20.1298 17.1351 20.0003 17.1249 19.892 17.1756C19.784 17.2263 19.7158 17.3292 19.7158 17.4415V30.5597C19.7158 30.6721 19.784 30.775 19.892 30.8256C19.9376 30.8471 19.9877 30.8578 20.0372 30.8578C20.1044 30.8578 20.1713 30.8385 20.2275 30.8003L29.8704 24.2412C29.953 24.1849 30.0015 24.0954 30.0015 24.0006C30.0015 23.9058 29.953 23.8164 29.8704 23.76L20.2275 17.201Z"
                stroke="#18191F"
                stroke-width="2"
              />
            </svg>
            <Line />
            <ButtonText>DISCOVER</ButtonText>
          </StyledButton>
        </ContentText>
      </Content>
    </HeroEl>
  );
};

export default Hero6;
