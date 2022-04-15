import React from "react";
import styled from "styled-components";
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";
import StatsItem7 from "./StatsItem/StatsItem7";
import { Colors, Shadows } from "../../Theme";

const DUMMY_STATS = [
  {
    id: "s1",
    heading: "40+",
    details: "Happy Clients",
  },
  {
    id: "s2",
    heading: "540+",
    details: "Projects Completed",
  },
  {
    id: "s3",
    heading: "300",
    details: "Dedicated Members",
  },
  {
    id: "s4",
    heading: "25+",
    details: "Awards Won",
  },
];

const Stats = styled.section`
  padding: 8rem 16.5rem;
  background: linear-gradient(
    to bottom,
    ${Colors.Brand.Purple} 0%,
    ${Colors.Brand.Purple} 60%,
    ${Colors.Default.White} 61%,
    ${Colors.Default.White} 100%
  );
  display: flex;
  flex-direction: column;
`;

const StatsHeading = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  margin-bottom: 4.8rem;
  color: ${Colors.Default.White};
`;

const StatsItems = styled.div`
  display: flex;
  column-gap: 3rem;
  justify-content: space-around;
  align-items: center;
`;

const Stats1 = () => {
  return (
    <Stats>
      <StatsHeading>
        <H2>Some count that matters</H2>
        <Lead>Our achievement in the journey depicted in numbers</Lead>
      </StatsHeading>
      <StatsItems>
        {DUMMY_STATS.map((statsItem) => (
          <StatsItem7 key={statsItem.id} {...statsItem} />
        ))}
      </StatsItems>
    </Stats>
  );
};

export default Stats1;
