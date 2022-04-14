import React from "react";
import styled from "styled-components";
import Img from "../../styled/Img.styled";
import H4 from "../../styled/H4.styled";
import Body from "../../styled/Body.styled";

const StatsItem = styled.div`
  display: flex;
  column-gap: 1.6rem;
  align-items: center;
  justify-content: center;
`;

const StatsDetails = styled.div`
  display: flex;
  flex-direction: column;
`;
const StatsItem6 = ({ icon, heading, details }) => {
  return (
    <StatsItem>
      <Img src={icon} width="3.2rem" height="3.2rem" />
      <StatsDetails>
        <H4>{heading}</H4>
        <Body>{details}</Body>
      </StatsDetails>
    </StatsItem>
  );
};

export default StatsItem6;
