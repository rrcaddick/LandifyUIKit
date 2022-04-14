import React from "react";
import styled from "styled-components";
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";
import { Colors } from "../../Theme";
import StatsItem1 from "./StatsItem/StatsItem1";

const DUMMY_STATS = [
  {
    id: "s1",
    heading: "5",
    details: "Service Geographics",
  },
  {
    id: "s2",
    heading: "30",
    details: "Fortune 500 Clients",
  },
  {
    id: "s3",
    heading: "300",
    details: "Dedicated Members",
  },
  {
    id: "s4",
    heading: "8",
    details: "Years of Journey",
  },
];

const Stats = styled.section`
  padding: 6.4rem 16.5rem;
  background-color: ${Colors.Brand.Purple};
  color: ${Colors.Default.White};
`;

const StatsHeading = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  text-align: center;
  margin-bottom: 4.8rem;
`;

const StatsItems = styled.div`
  display: flex;
  justify-items: center;
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
          <StatsItem1 key={statsItem.id} {...statsItem} />
        ))}
      </StatsItems>
    </Stats>
  );
};

export default Stats1;
