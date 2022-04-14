import React from "react";
import styled from "styled-components";
import StatsIcon1 from "../../images/icons/01.svg";
import StatsIcon2 from "../../images/icons/02.svg";
import StatsIcon3 from "../../images/icons/03.svg";
import StatsIcon4 from "../../images/icons/04.svg";
import StatsItem1 from "./StatsItem/StatsItem1";
import { Colors, Shadows } from "../../Theme";

const DUMMY_STATS = [
  {
    id: "s1",
    icon: StatsIcon1,
    heading: "40+",
    details: "Happy Clients",
  },
  {
    id: "s2",
    icon: StatsIcon2,
    heading: "540+",
    details: "Projects Completed",
  },
  {
    id: "s3",
    icon: StatsIcon3,
    heading: "300",
    details: "Dedicated Members",
  },
  {
    id: "s4",
    icon: StatsIcon4,
    heading: "25+",
    details: "Awards Won",
  },
];

const Stats = styled.section`
  padding: 8rem 16.5rem;
  background: linear-gradient(
    to bottom,
    ${Colors.Brand.Purple} 0%,
    ${Colors.Brand.Purple} 50%,
    ${Colors.Default.White} 51%,
    ${Colors.Default.White} 100%
  );
`;

const StatsItems = styled.div`
  display: flex;
  column-gap: 3rem;
  justify-items: center;
  align-items: center;
  padding: 3.2rem 0;
  background-color: ${Colors.Default.White};
  border-radius: 0.8rem;
  box-shadow: ${Shadows.MobileMockup};
`;

const Stats1 = () => {
  return (
    <Stats>
      <StatsItems>
        {DUMMY_STATS.map((statsItem) => (
          <StatsItem1 key={statsItem.id} {...statsItem} />
        ))}
      </StatsItems>
    </Stats>
  );
};

export default Stats1;
