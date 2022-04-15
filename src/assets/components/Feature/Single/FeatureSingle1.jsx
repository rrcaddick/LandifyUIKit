import React from "react";
import styled from "styled-components";
import { Colors, TextStyles } from "../../../Theme";
import Img from "../../styled/Img.styled";
import H3 from "../../styled/H3.styled";
import Lead from "../../styled/Lead.styled";
import LinkLabelIcon from "../../styled/LinkLabelIcon.styled";
import FeatureSingleImg from "../../../images/FeatureSingle1.svg";

const Feature = styled.section`
  display: flex;
  padding: 6.4rem 16.5rem;
`;

const FeatureImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const FeatureContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  row-gap: 3.2rem;
  padding: 12rem 7.8rem;
`;

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
`;

const Title = styled.p`
  ${TextStyles.Bundler(TextStyles.Others.Capatalized)};
  color: ${Colors.Brand.Turquoise};
  text-transform: uppercase;
`;

const FeatureSingle1 = () => {
  return (
    <Feature>
      <FeatureImage>
        <Img src={FeatureSingleImg} />
      </FeatureImage>
      <FeatureContent>
        <Heading>
          <Title>Consultant</Title>
          <H3>Headline</H3>
        </Heading>
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

export default FeatureSingle1;
