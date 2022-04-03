import React from "react";
import styled from "styled-components";
import Img from "../styled/Img.styled";
import AirbnbLogo from "../../images/AirbnbLogo.svg";
import HubspotLogo from "../../images/HubspotLogo.svg";
import GoogleLogo from "../../images/GoogleLogo.svg";
import MicrosoftLogo from "../../images/MicrosoftLogo.svg";
import WalmartLogo from "../../images/WalmartLogo.svg";
import FedExLogo from "../../images/FedExLogo.svg";
import OyoLogo from "../../images/OyoLogo.svg";
import OlaLogo from "../../images/OlaLogo.svg";
import AmazonLogo from "../../images/AmazonLogo.svg";
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";
import { Shadows } from "../../Theme";

const StyledLogoCloud = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 16.5rem;
  background: #f4f5f7;
`;

const StyledLogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 4rem;
  margin-top: 4.8rem;
`;

const StyledLogos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 2.4rem;
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.4rem 2.4rem;
  min-width: 17rem;
  background-color: #fff;
  border-radius: 1rem;
  filter: drop-shadow(${Shadows.Grey});
`;

const LogoCloud3 = () => {
  return (
    <StyledLogoCloud>
      <H2>Our Clients</H2>
      <Lead>We have been working with some Fortune 500 clients</Lead>
      <StyledLogoContainer>
        <StyledLogos>
          <StyledLogo>
            <Img src={AirbnbLogo} />
          </StyledLogo>
        </StyledLogos>
        <StyledLogos>
          <StyledLogo>
            <Img src={GoogleLogo} />
          </StyledLogo>
          <StyledLogo>
            <Img src={HubspotLogo} />
          </StyledLogo>
        </StyledLogos>
        <StyledLogos>
          <StyledLogo>
            <Img src={MicrosoftLogo} />
          </StyledLogo>
          <StyledLogo>
            <Img src={FedExLogo} />
          </StyledLogo>
          <StyledLogo>
            <Img src={WalmartLogo} />
          </StyledLogo>
        </StyledLogos>
        <StyledLogos>
          <StyledLogo>
            <Img src={OyoLogo} />
          </StyledLogo>
          <StyledLogo>
            <Img src={OlaLogo} />
          </StyledLogo>
        </StyledLogos>
        <StyledLogos>
          <StyledLogo>
            <Img src={AmazonLogo} />
          </StyledLogo>
        </StyledLogos>
      </StyledLogoContainer>
    </StyledLogoCloud>
  );
};

export default LogoCloud3;
