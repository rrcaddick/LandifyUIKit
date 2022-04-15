import React from "react";
import styled from "styled-components";
import Background from "../../../images/features/feature-background.svg";
import { Colors, Shadows } from "../../../Theme";
import H3 from "../../styled/H3.styled";
import Lead from "../../styled/Lead.styled";
import Button from "../../styled/Button.styled";

const Feature = styled.section`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 30rem 16.5rem 0.6rem 73.5rem;
  background: linear-gradient(${Colors.Default.White}, ${Colors.Default.White}) bottom/100% 35% no-repeat,
    url(${Background}) center/cover no-repeat;
`;

const FeatureContent = styled.div`
  padding: 6.4rem;
  background-color: ${Colors.Default.White};
  box-shadow: ${Shadows.Dark2};
`;

const Title = styled(H3)`
  margin-bottom: 1.6rem;
`;

const ContentControls = styled.div`
  display: flex;
  gap: 4rem;
`;

const Control = styled.a`
  margin-top: 4rem;
  color: ${Colors.Brand.Purple};
`;

const FeatureSingle3 = () => {
  return (
    <Feature>
      <FeatureContent>
        <Title>Headline</Title>
        <Lead>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum quis amet, faucibus lorem. Lectus amet odio
          quis sed adipiscing adipiscing magna non. Nullam turpis faucibus ridiculus suscipit. Et blandit suspendisse
          curabitur eu congue dui ut.
        </Lead>
        <ContentControls>
          <Control>Learn more</Control>
          <Control>Watch Video</Control>
        </ContentControls>
      </FeatureContent>
    </Feature>
  );
};

export default FeatureSingle3;
