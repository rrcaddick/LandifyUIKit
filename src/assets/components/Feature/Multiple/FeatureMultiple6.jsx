import React from "react";
import styled from "styled-components";
import H2 from "../../styled/H2.styled";
import FeatureIcon1 from "../../../images/icons/01.svg";
import FeatureIcon2 from "../../../images/icons/02.svg";
import FeatureIcon3 from "../../../images/icons/03.svg";
import FeatureIcon4 from "../../../images/icons/04.svg";
import FeatureIcon5 from "../../../images/icons/05.svg";
import FeatureIcon6 from "../../../images/icons/08.svg";
import FeatureItem6 from "./FeatureItem/FeatureItem6";
import { Colors } from "../../../Theme";

const StyledFeatureMultiple = styled.section`
  display: flex;
  flex-direction: column;
  padding: 8rem 16.5rem 9.6rem;
  row-gap: 4.8rem;
  position: relative;
  :after {
    content: "";
    position: absolute;
    width: 35%;
    padding-bottom: 35%;
    border-radius: 50%;
    right: 2rem;
    background-color: ${Colors.Brand.Purple100};
    z-index: -1;
  }
`;

const FeatureHeader = styled.div`
  max-width: 73rem;
`;

const FeatureItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 3rem;
  row-gap: 6.4rem;
`;

const DUMMY_FEATURES = [
  {
    id: "f1",
    icon: FeatureIcon1,
    heading: "Mobile Responsive",
  },
  {
    id: "f2",
    icon: FeatureIcon2,
    heading: "User Friendly",
  },
  {
    id: "f3",
    icon: FeatureIcon3,
    heading: "Well Organised Layers",
  },
  {
    id: "f4",
    icon: FeatureIcon4,
    heading: "Easily Customisable",
  },
  {
    id: "f5",
    icon: FeatureIcon5,
    heading: "Better Components",
  },
  {
    id: "f6",
    icon: FeatureIcon6,
    heading: "Multiple Blocks",
  },
  {
    id: "f7",
    icon: FeatureIcon6,
    heading: "Robust Workflow",
  },
  {
    id: "f8",
    icon: FeatureIcon6,
    heading: "Project Management",
  },
];

const FeatureMultiple4 = () => {
  return (
    <StyledFeatureMultiple>
      <FeatureHeader>
        <H2>Discover the key features</H2>
      </FeatureHeader>
      <FeatureItems>
        {DUMMY_FEATURES.map((feature) => (
          <FeatureItem6 key={feature.id} {...feature} />
        ))}
      </FeatureItems>
    </StyledFeatureMultiple>
  );
};

export default FeatureMultiple4;
