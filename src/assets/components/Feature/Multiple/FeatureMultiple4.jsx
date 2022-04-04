import React from "react";
import styled from "styled-components";
import H2 from "../../styled/H2.styled";
import Button from "../../styled/Button.styled";
import FeatureIcon1 from "../../../images/icons/01.svg";
import FeatureIcon2 from "../../../images/icons/02.svg";
import FeatureIcon3 from "../../../images/icons/03.svg";
import FeatureIcon4 from "../../../images/icons/04.svg";
import FeatureIcon5 from "../../../images/icons/05.svg";
import FeatureIcon6 from "../../../images/icons/08.svg";
import FeatureItem4 from "./FeatureItem/FeatureItem4";
import { Colors } from "../../../Theme";

const StyledFeatureMultiple = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6.4rem 16.5rem;
  row-gap: 4.8rem;
  background-color: ${Colors.Default.Black};
`;

const FeatureHeader = styled.div`
  max-width: 73rem;
  text-align: center;
  color: ${Colors.Default.White};
`;

const FeatureItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
`;

const DUMMY_FEATURES = [
  {
    id: "f1",
    icon: FeatureIcon1,
    heading: "Mobile Application",
    description: "Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
  },
  {
    id: "f2",
    icon: FeatureIcon2,
    heading: "Web Application",
    description: "Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
  },
  {
    id: "f3",
    icon: FeatureIcon3,
    heading: "User Interface Design",
    description: "Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
  },
  {
    id: "f4",
    icon: FeatureIcon4,
    heading: "Strategy and Branding",
    description: "Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
  },
  {
    id: "f5",
    icon: FeatureIcon5,
    heading: "Performance Marketing",
    description: "Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
  },
  {
    id: "f6",
    icon: FeatureIcon6,
    heading: "Project Management",
    description: "Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.",
  },
];

const FeatureMultiple4 = () => {
  return (
    <StyledFeatureMultiple>
      <FeatureHeader>
        <H2>Services that connect you to your users</H2>
      </FeatureHeader>
      <FeatureItems>
        {DUMMY_FEATURES.map((feature) => (
          <FeatureItem4 key={feature.id} {...feature} />
        ))}
      </FeatureItems>
      <Button size="lg" styleType="outline">
        Explore all &#8594;
      </Button>
    </StyledFeatureMultiple>
  );
};

export default FeatureMultiple4;
