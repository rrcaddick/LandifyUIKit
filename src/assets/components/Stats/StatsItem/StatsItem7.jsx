import React from "react";
import styled from "styled-components";
import H2 from "../../styled/H2.styled";
import Lead from "../../styled/Lead.styled";
import { Colors, Shadows } from "../../../Theme";

const Container = styled.div`
  filter: url("#goo") drop-shadow(${Shadows.MobileMockup});
  overflow: hidden;
  position: relative;
  flex: 0 0 20rem;
`;

const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 6rem 0;
  clip-path: polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%);
  background: ${Colors.Default.White};
`;

const StatsItem6 = ({ heading, details }) => {
  return (
    <>
      <Container>
        <StatsItem>
          <H2>{heading}</H2>
          <Lead>{details}</Lead>
        </StatsItem>
      </Container>
      <svg
        style={{ visibility: "hidden", position: "absolute" }}
        width="0"
        height="0"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default StatsItem6;
