import React from "react";
import styled from "styled-components";
import H2 from "../../styled/H2.styled";
import Lead from "../../styled/Lead.styled";
import FeatureIcon1 from "../../../images/icons/01.svg";
import FeatureIcon2 from "../../../images/icons/02.svg";
import FeatureIcon3 from "../../../images/icons/03.svg";
import FeatureIcon4 from "../../../images/icons/04.svg";
import FeatureIcon5 from "../../../images/icons/05.svg";
import FeatureIcon6 from "../../../images/icons/08.svg";
import FeatureItem5 from "./FeatureItem/FeatureItem5";

const StyledFeatureMultiple = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6.4rem 16.5rem;
  row-gap: 4.8rem;
`;

const FeatureHeader = styled.div`
  max-width: 54rem;
  text-align: center;
`;

const FeatureItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
  row-gap: 6.4rem;
`;

const DUMMY_FEATURES = [
  {
    id: "f1",
    icon: FeatureIcon1,
    heading: "Robust workflow",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    id: "f2",
    icon: FeatureIcon2,
    heading: "Flexibility",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    id: "f3",
    icon: FeatureIcon3,
    heading: "User Friendly",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    id: "f4",
    icon: FeatureIcon4,
    heading: "Multiple layouts",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    id: "f5",
    icon: FeatureIcon5,
    heading: "Better components",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
  {
    id: "f6",
    icon: FeatureIcon6,
    heading: "Well organised",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
  },
];

const FeatureMultiple5 = () => {
  return (
    <StyledFeatureMultiple>
      <FeatureHeader>
        <H2>Tailor-made features</H2>
        <Lead>
          Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual
          presentation.
        </Lead>
      </FeatureHeader>
      <FeatureItems>
        {DUMMY_FEATURES.map((feature) => (
          <FeatureItem5 key={feature.id} {...feature} />
        ))}
      </FeatureItems>
    </StyledFeatureMultiple>
  );
};

export default FeatureMultiple5;
