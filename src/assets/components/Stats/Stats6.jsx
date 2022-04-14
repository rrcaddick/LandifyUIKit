import React from "react";
import styled from "styled-components";
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";
import StatsIcon1 from "../../images/icons/01.svg";
import StatsIcon2 from "../../images/icons/02.svg";
import StatsIcon3 from "../../images/icons/03.svg";
import StatsIcon4 from "../../images/icons/04.svg";
import StatsItem6 from "./StatsItem/StatsItem6";

const DUMMY_STATS = [
  {
    id: "s4",
    icon: StatsIcon1,
    heading: "10,000+",
    details: "Downloads per day",
  },
  {
    id: "s2",
    icon: StatsIcon2,
    heading: "2 Million",
    details: "Users",
  },
  {
    id: "s3",
    icon: StatsIcon3,
    heading: "500+",
    details: "Clients",
  },
  {
    id: "s4",
    icon: StatsIcon4,
    heading: "140",
    details: "Countries",
  },
];

const Stats = styled.section`
  display: flex;
  column-gap: 3rem;
  padding: 8rem 16.5rem;
`;

const StatsHeading = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
`;

const StatsItems = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 4rem;
  justify-items: flex-start;
`;

const Stats6 = () => {
  return (
    <Stats>
      <StatsHeading>
        <H2>Our 18 yars of achievements</H2>
        <Lead>With our super powers we have reached this</Lead>
      </StatsHeading>
      <StatsItems>
        {DUMMY_STATS.map((statsItem) => (
          <StatsItem6 key={statsItem.id} {...statsItem} />
        ))}
      </StatsItems>
    </Stats>
  );
};

export default Stats6;
