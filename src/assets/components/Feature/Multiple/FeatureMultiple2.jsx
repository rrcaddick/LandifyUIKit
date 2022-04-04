import React from "react";
import styled from "styled-components";
import H2 from "../../styled/H2.styled";
import FeatureIcon1 from "../../../images/icons/01.svg";
import FeatureIcon2 from "../../../images/icons/02.svg";
import FeatureIcon3 from "../../../images/icons/03.svg";
import FeatureIcon4 from "../../../images/icons/04.svg";
import FeatureIcon6 from "../../../images/icons/06.svg";
import FeatureIcon7 from "../../../images/icons/07.svg";
import FeatureItem2 from "./FeatureItem/FeatureItem2";

const StyledFeatureMultiple = styled.section`
  display: flex;
  flex-direction: column;
  padding: 6.4rem 16.5rem;
  row-gap: 4.8rem;
`;

const FeatureHeader = styled.div`
  max-width: 54rem;
`;

const FeatureItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3rem;
  row-gap: 4.8rem;
`;

const DUMMY_FEATURES = [
  {
    id: "f1",
    icon: FeatureIcon1,
    heading: "Time zones ain’t no thing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
  },
  {
    id: "f2",
    icon: FeatureIcon4,
    heading: "Full spectrum of services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
  },
  {
    id: "f3",
    icon: FeatureIcon6,
    heading: "Impossible? We’re on it",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
  },
  {
    id: "f4",
    icon: FeatureIcon7,
    heading: "Flexible work terms",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
  },
];

const FeatureMultiple5 = () => {
  return (
    <StyledFeatureMultiple>
      <FeatureHeader>
        <H2>Benefits of working with us</H2>
      </FeatureHeader>
      <FeatureItems>
        {DUMMY_FEATURES.map((feature) => (
          <FeatureItem2 key={feature.id} {...feature} />
        ))}
      </FeatureItems>
    </StyledFeatureMultiple>
  );
};

export default FeatureMultiple5;
