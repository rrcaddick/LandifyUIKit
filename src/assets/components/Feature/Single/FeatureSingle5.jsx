import React from "react";
import styled from "styled-components";
import { Colors } from "../../../Theme";
import Img from "../../styled/Img.styled";
import H3 from "../../styled/H3.styled";
import Lead from "../../styled/Lead.styled";
import LinkLabelIcon from "../../styled/LinkLabelIcon.styled";
import PhoneMockup from "../../../images/PhoneMockup.svg";

const Feature = styled.section`
  display: flex;
  padding: 6.4rem 16.5rem;
`;

const FeatureImage = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  background-color: ${Colors.Brand.Purple100};
  border-radius: 0.8rem;
  overflow: hidden;
  position: relative;
`;

const StyledImg = styled(Img)`
  transform: translateY(5.6rem);
  position: absolute;
`;

const FeatureContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;
  padding: 12rem 7.8rem;
`;

const FeatureSingle5 = () => {
  return (
    <Feature>
      <FeatureImage>
        <StyledImg src={PhoneMockup} />
      </FeatureImage>
      <FeatureContent>
        <H3>Headline</H3>
        <Lead>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Condimentum diam orci pretium a pharetra, feugiat
          cursus. Dictumst risus, sem egestas odio cras adipiscing vulputate. Nisi, risus in suscipit non. Non commodo
          volutpat, pharetra, vel.
        </Lead>
        <LinkLabelIcon>Get Started</LinkLabelIcon>
      </FeatureContent>
    </Feature>
  );
};

export default FeatureSingle5;
