import React from "react";
import styled from "styled-components";
import Img from "../styled/Img.styled";
import AirbnbLogo from "../../images/AirbnbLogo.svg";
import HubspotLogo from "../../images/HubspotLogo.svg";
import GoogleLogo from "../../images/GoogleLogo.svg";
import MicrosoftLogo from "../../images/MicrosoftLogo.svg";
import WalmartLogo from "../../images/WalmartLogo.svg";
import FedExLogo from "../../images/FedExLogo.svg";
import H2 from "../styled/H2.styled";

const StyledLogoCloud = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.5rem 16.5rem;
  row-gap: 4rem;
`;

const StyledLogoCloudText = styled(H2)``;

const StyledLogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const LogoCloud1 = () => {
  return (
    <StyledLogoCloud>
      <StyledLogoCloudText>Trusted by our beloved clients</StyledLogoCloudText>
      <StyledLogoContainer>
        <Img src={AirbnbLogo} />
        <Img src={HubspotLogo} />
        <Img src={GoogleLogo} />
        <Img src={MicrosoftLogo} />
        <Img src={WalmartLogo} />
        <Img src={FedExLogo} />
      </StyledLogoContainer>
    </StyledLogoCloud>
  );
};

export default LogoCloud1;
