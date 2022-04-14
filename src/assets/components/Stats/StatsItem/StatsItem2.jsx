import React from "react";
import styled from "styled-components";
import Img from "../../styled/Img.styled";
import H2 from "../../styled/H2.styled";
import Lead from "../../styled/Lead.styled";
import { Colors } from "../../../Theme";

const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 1.6rem;
  align-items: center;
  justify-content: center;
  flex: 1 1 25.5rem;
`;

const Icon = styled.span`
  width: 6.4rem;
  height: 6.4rem;
  border-radius: 50%;
  background-color: ${Colors.Text.Gray100};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledH2 = styled(H2)`
  color: ${Colors.Brand.Purple};
  margin-top: 1.6rem;
`;

const StatsItem6 = ({ icon, heading, details }) => {
  return (
    <StatsItem>
      <Icon>
        <Img src={icon} width="2.4rem" height="2.4rem" />
      </Icon>
      <StyledH2>{heading}</StyledH2>
      <Lead>{details}</Lead>
    </StatsItem>
  );
};

export default StatsItem6;
