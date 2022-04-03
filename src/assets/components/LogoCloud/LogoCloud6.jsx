import React from "react";
import styled from "styled-components";
import Img from "../styled/Img.styled";
import AirbnbLogo from "../../images/AirbnbLogo.svg";
import GoogleLogo from "../../images/GoogleLogo.svg";
import MicrosoftLogo from "../../images/MicrosoftLogo.svg";
import WalmartLogo from "../../images/WalmartLogo.svg";
import FedExLogo from "../../images/FedExLogo.svg";
import OlaLogo from "../../images/OlaLogo.svg";
import AmazonLogo from "../../images/AmazonLogo.svg";
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";
import { Colors } from "../../Theme";

const StyledLogoCloud = styled.section`
  display: flex;
  align-items: center;
  padding: 5rem 16.5rem 8rem;
  row-gap: 4rem;
  overflow: hidden;
`;

const StyledLogoCloudText = styled.div`
  flex: 1;
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
    bottom: -75%;
    left: 0;
    width: 75%;
    padding-top: 75%;
    background-color: ${Colors.Brand.Purple100};
    border-radius: 50%;
    z-index: -1;
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
        <H2>Easy integrations with 170+ tools</H2>
        <Lead>Connect Landify with your favourite tools that you use daily and keep things on track.</Lead>
      </StyledLogoCloudText>
      <StyledLogoContainer>
        <StyledLogos>
          <Img src={AirbnbLogo} />
          <Img src={AmazonLogo} />
          <Img src={FedExLogo} />
          <Img src={MicrosoftLogo} />
        </StyledLogos>
        <StyledLogos>
          <Img src={GoogleLogo} />
          <Img src={OlaLogo} />
          <Img src={WalmartLogo} />
        </StyledLogos>
      </StyledLogoContainer>
    </StyledLogoCloud>
  );
};

export default LogoCloud6;
