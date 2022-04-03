import React from "react";
import styled from "styled-components";
import Img from "../styled/Img.styled";
import AirbnbLogo from "../../images/AirbnbLogo.svg";
import GoogleLogo from "../../images/GoogleLogo.svg";
import MicrosoftLogo from "../../images/MicrosoftLogo.svg";
import WalmartLogo from "../../images/WalmartLogo.svg";
import FedExLogo from "../../images/FedExLogo.svg";
import OyoLogo from "../../images/OyoLogo.svg";
import OlaLogo from "../../images/OlaLogo.svg";
import AmazonLogo from "../../images/AmazonLogo.svg";
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";

const StyledLogoCloud = styled.section`
  display: flex;
  padding: 5rem 16.5rem;
  row-gap: 4rem;
`;

const StyledLogoCloudText = styled.div`
  flex: 1;
`;

const StyledLogoContainer = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
`;

const LogoCloud4 = () => {
  return (
    <StyledLogoCloud>
      <StyledLogoCloudText>
        <H2>1,50,000+</H2>
        <Lead>Customers who use Landify UI Kit to build their new startup landing page.</Lead>
      </StyledLogoCloudText>
      <StyledLogoContainer>
        <Img src={AirbnbLogo} />
        <Img src={AmazonLogo} />
        <Img src={FedExLogo} />
        <Img src={MicrosoftLogo} />
        <Img src={GoogleLogo} />
        <Img src={OlaLogo} />
        <Img src={WalmartLogo} />
        <Img src={OyoLogo} />
      </StyledLogoContainer>
    </StyledLogoCloud>
  );
};

export default LogoCloud4;
