import React from "react";
import styled from "styled-components";
import Img from "../styled/Img.styled";
import LogoCloud from "../../images/LogoCloud5.svg";
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";

const StyledLogoCloud = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 16.5rem;
  column-gap: 4rem;
`;

const StyledLogoCloudText = styled.div`
  flex: 1;
`;

const StyledLogoContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const LogoCloud5 = () => {
  return (
    <StyledLogoCloud>
      <StyledLogoCloudText>
        <H2>Get deals from 100+ companies</H2>
        <Lead>
          Subscribe to our application and get deals from top notch companies in the world every month. Be an exclusive
          member of the team.
        </Lead>
      </StyledLogoCloudText>
      <StyledLogoContainer>
        <Img src={LogoCloud} />
      </StyledLogoContainer>
    </StyledLogoCloud>
  );
};

export default LogoCloud5;
