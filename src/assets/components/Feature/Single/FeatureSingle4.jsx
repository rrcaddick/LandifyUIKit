import React from "react";
import styled from "styled-components";
import { Colors } from "../../../Theme";
import H3 from "../../styled/H3.styled";
import Img from "../../styled/Img.styled";
import Lead from "../../styled/Lead.styled";
import LinkLabelIcon from "../../styled/LinkLabelIcon.styled";
import PhoneMockup from "../../../images/PhoneMockup.svg";

const Feature = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20.9rem 16.5rem;
`;

const FeatureContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${Colors.Brand.Purple};
  color: ${Colors.Default.White};
  border-radius: 1.6rem;
  position: relative;
`;

const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  width: 50%;
  padding: 4rem 4.8rem;
`;

const StyledLinkIcon = styled(LinkLabelIcon)`
  color: ${Colors.Default.White};
`;

const FeatureImage = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-end;
  width: 50%;
  right: 11rem;
`;

const FeatureSingle4 = () => {
  return (
    <Feature>
      <FeatureContainer>
        <FeatureContent>
          <H3>Headline</H3>
          <Lead>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum quis amet, faucibus lorem. Lectus amet
            odio quis sed adipiscing adipiscing magna non. Nullam turpis faucibus ridiculus suscipit. Et blandit
            suspendisse curabitur eu congue dui ut.
          </Lead>
          <StyledLinkIcon size="lg">Get started -&gt;</StyledLinkIcon>
        </FeatureContent>
        <FeatureImage>
          <Img src={PhoneMockup} />
        </FeatureImage>
      </FeatureContainer>
    </Feature>
  );
};

export default FeatureSingle4;
