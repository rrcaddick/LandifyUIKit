import React from "react";
import styled from "styled-components";
import H2 from "../../styled/H2.styled";
import Img from "../../styled/Img.styled";
import FeatureItem7 from "./FeatureItem/FeatureItem7";
import PhoneMockup from "../../../images/PhoneMockup.svg";
import FeatureIcon1 from "../../../images/icons/01.svg";
import FeatureIcon2 from "../../../images/icons/02.svg";
import FeatureIcon3 from "../../../images/icons/03.svg";
import FeatureIcon4 from "../../../images/icons/04.svg";
import FeatureIcon6 from "../../../images/icons/06.svg";
import FeatureIcon7 from "../../../images/icons/07.svg";

const StyledFeatureMultiple = styled.section`
  display: flex;
  flex-direction: column;
  padding: 6.4rem 16.5rem;
  row-gap: 4.8rem;
`;

const FeatureHeader = styled.div`
  margin-bottom: 4.8rem;
`;

const FeatureContent = styled.div`
  display: flex;
`;

const FeatureItems = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  column-gap: 3rem;
  row-gap: 4.8rem;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DUMMY_FEATURES = [
  {
    id: "f1",
    icon: FeatureIcon1,
    heading: "Time zones ain’t no thing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.",
  },
  {
    id: "f2",
    icon: FeatureIcon4,
    heading: "Full spectrum of services",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.",
  },
  {
    id: "f3",
    icon: FeatureIcon6,
    heading: "Impossible? We’re on it",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.",
  },
  {
    id: "f4",
    icon: FeatureIcon7,
    heading: "Flexible work terms",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum porta magna at blandit a.",
  },
];

const FeatureMultiple7 = () => {
  return (
    <StyledFeatureMultiple>
      <FeatureHeader>
        <H2>App Features</H2>
      </FeatureHeader>
      <FeatureContent>
        <FeatureItems>
          {DUMMY_FEATURES.map((feature) => (
            <FeatureItem7 key={feature.id} {...feature} />
          ))}
        </FeatureItems>
        <ImageContainer>
          <Img src={PhoneMockup} />
        </ImageContainer>
      </FeatureContent>
    </StyledFeatureMultiple>
  );
};

export default FeatureMultiple7;
