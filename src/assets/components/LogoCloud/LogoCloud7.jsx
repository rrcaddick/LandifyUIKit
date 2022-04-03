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
import BookMyShowLogo from "../../images/BookMyShowLogo.svg";
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";
import Button from "../styled/Button.styled";
import { Colors } from "../../Theme";

const StyledLogoCloud = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 16.5rem 8rem;
  row-gap: 4rem;
`;

const StyledLogoCloudText = styled.div`
  flex: 1;
  max-width: 54rem;
  text-align: center;
`;

const StyledLogoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  position: relative;
  :after {
    content: "";
    position: absolute;
    z-index: 1;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1) 90%);
    width: 100%;
    height: 6rem;
  }
`;

const StyledLogos = styled.div`
  display: flex;
  justify-content: center;
  gap: 6rem;
`;

const LogoCloud6 = () => {
  return (
    <StyledLogoCloud>
      <StyledLogoCloudText>
        <H2>Over 100+ Integrations</H2>
        <Lead>Integrate with all the marketing & social apps you use everyday.</Lead>
      </StyledLogoCloudText>
      <StyledLogoContainer>
        <StyledLogos>
          <Img src={AirbnbLogo} />
          <Img src={AmazonLogo} />
          <Img src={FedExLogo} />
          <Img src={MicrosoftLogo} />
          <Img src={HubspotLogo} />
          <Img src={OyoLogo} />
          <Img src={BookMyShowLogo} />
        </StyledLogos>
        <StyledLogos>
          <Img src={GoogleLogo} />
          <Img src={OlaLogo} />
          <Img src={OyoLogo} />
          <Img src={AirbnbLogo} />
          <Img src={MicrosoftLogo} />
          <Img src={WalmartLogo} />
        </StyledLogos>
        <StyledLogos>
          <Img src={AmazonLogo} />
          <Img src={OlaLogo} />
          <Img src={FedExLogo} />
          <Img src={BookMyShowLogo} />
          <Img src={HubspotLogo} />
        </StyledLogos>
      </StyledLogoContainer>
      <Button>View Integrations</Button>
    </StyledLogoCloud>
  );
};

export default LogoCloud6;
