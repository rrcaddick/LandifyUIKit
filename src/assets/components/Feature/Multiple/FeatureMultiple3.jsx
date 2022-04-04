import React from "react";
import styled from "styled-components";
import H2 from "../../styled/H2.styled";
import FeatureIcon1 from "../../../images/icons/01.svg";
import FeatureIcon4 from "../../../images/icons/04.svg";
import FeatureIcon7 from "../../../images/icons/07.svg";
import FeatureItem3 from "./FeatureItem/FeatureItem3";

const StyledFeatureMultiple = styled.section`
  display: flex;
  flex-direction: column;
  padding: 6.4rem 16.5rem;
  row-gap: 4.8rem;
`;

const FeatureHeader = styled.div`
  max-width: 73rem;
`;

const FeatureItems = styled.div`
  display: flex;
  column-gap: 3rem;
`;

const DUMMY_FEATURES = [
  {
    id: "f1",
    icon: FeatureIcon1,
    heading: "Multiple links",
    description: "Add multiple links in Instagram instead of just one.",
  },
  {
    id: "f2",
    icon: FeatureIcon4,
    heading: "Online messaging",
    description: "Allow your clients to connect with you with one click.",
  },
  {
    id: "f3",
    icon: FeatureIcon7,
    heading: "Application forms",
    description: "Capture leads and grow your business with them.",
  },
];

const FeatureMultiple3 = () => {
  return (
    <StyledFeatureMultiple>
      <FeatureHeader>
        <H2>Discover the key features</H2>
      </FeatureHeader>
      <FeatureItems>
        {DUMMY_FEATURES.map((feature) => (
          <FeatureItem3 key={feature.id} {...feature} />
        ))}
      </FeatureItems>
    </StyledFeatureMultiple>
  );
};

export default FeatureMultiple3;
