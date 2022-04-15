import React from "react";
import styled from "styled-components";
import { Colors } from "../../../Theme";
import Img from "../../styled/Img.styled";
import H3 from "../../styled/H3.styled";
import Lead from "../../styled/Lead.styled";
import FeatureImg from "../../../images/features/feature6.svg";

const Feature = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 4.8rem;
  padding: 6.4rem 16.5rem;
`;

const FeatureContent = styled.div`
  display: flex;
  column-gap: 3rem;
`;

const Title = styled(H3)`
  flex: 1;
`;

const Description = styled(Lead)`
  flex: 1;
`;

const FeatureImage = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledImg = styled(Img)`
  width: 100%;
`;

const FeatureSingle6 = () => {
  return (
    <Feature>
      <FeatureContent>
        <Title>Enter the world of all fashion trends</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Venenatis scelerisque at quam congue posuere libero
          in sit quam. Consequat, scelerisque non tincidunt sit lectus senectus.
        </Description>
      </FeatureContent>
      <FeatureImage>
        <StyledImg src={FeatureImg} />
      </FeatureImage>
    </Feature>
  );
};

export default FeatureSingle6;
