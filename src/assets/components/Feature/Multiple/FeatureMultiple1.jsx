import React from "react";
import styled from "styled-components";
import H2 from "../../styled/H2.styled";
import FeatureItem1 from "./FeatureItem/FeatureItem1";
import FeatureImage1 from "../../../images/features/feature1/image1.svg";
import FeatureImage2 from "../../../images/features/feature1/image2.svg";
import FeatureImage3 from "../../../images/features/feature1/image3.svg";
import FeatureImage4 from "../../../images/features/feature1/image4.svg";

const StyledFeatureMultiple = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 6.4rem 16.5rem;
`;

const FeatureHeader = styled.div`
  max-width: 73rem;
`;

const FeatureItems = styled.div`
  display: flex;
  gap: 3rem;
`;

const DUMMY_FEATURES = [
  {
    id: "f1",
    image: FeatureImage1,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "f2",
    image: FeatureImage2,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "f3",
    image: FeatureImage3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "f4",
    image: FeatureImage4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const FeatureMultiple1 = () => {
  return (
    <StyledFeatureMultiple>
      <FeatureHeader>
        <H2>Experience is the key to customer lifetime value.</H2>
      </FeatureHeader>
      <FeatureItems>
        {DUMMY_FEATURES.map((feature) => (
          <FeatureItem1 key={feature.id} {...feature} />
        ))}
      </FeatureItems>
    </StyledFeatureMultiple>
  );
};

export default FeatureMultiple1;
