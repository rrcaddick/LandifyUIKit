import React from "react";
import styled from "styled-components";
import H2 from "../../styled/H2.styled";
import Lead from "../../styled/Lead.styled";
import { Colors } from "../../../Theme";

const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 1 25.5rem;
  :not(:last-child) {
    border-right: 0.1rem solid ${Colors.Default.White};
  }
`;

const StatsItem6 = ({ heading, details }) => {
  return (
    <StatsItem>
      <H2>{heading}</H2>
      <Lead>{details}</Lead>
    </StatsItem>
  );
};

export default StatsItem6;
