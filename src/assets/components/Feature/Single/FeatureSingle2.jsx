import React from "react";
import styled from "styled-components";
import Img from "../../styled/Img.styled";
import H3 from "../../styled/H3.styled";
import Lead from "../../styled/Lead.styled";
import Button from "../../styled/Button.styled";
import FeatureGrid1 from "../../../images/feature-grid/01.svg";
import FeatureGrid2 from "../../../images/feature-grid/02.svg";
import FeatureGrid3 from "../../../images/feature-grid/03.svg";
import FeatureGrid4 from "../../../images/feature-grid/04.svg";
import FeatureItem2 from "./FeatureItem/FeatureItem2";
import FeatureIcon1 from "../../../images/icons/01.svg";
import FeatureIcon2 from "../../../images/icons/02.svg";

const Feature = styled.section`
  display: flex;
  padding: 6.4rem 16.5rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 6.4rem repeat(2, auto) 7.1rem;
  gap: 2rem;
  width: 50%;
`;

const ImgContainer = styled.div`
  :nth-child(1) {
    grid-column: 1/4;
    grid-row: 1/3;
  }
  :nth-child(2) {
    grid-column: 4/7;
    grid-row: 2/3;
  }
  :nth-child(3) {
    grid-column: 1/3;
    grid-row: 3/4;
  }
  :nth-child(4) {
    grid-column: 3/7;
    grid-row: 3/5;
  }
`;

const StyledImg = styled(Img)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const FeatureContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 4.2rem;
  padding: 12rem 7.8rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
`;

const FeatureSingle1 = () => {
  return (
    <Feature>
      <FeatureGrid>
        <ImgContainer>
          <StyledImg src={FeatureGrid1} />
        </ImgContainer>
        <ImgContainer>
          <StyledImg src={FeatureGrid2} />
        </ImgContainer>
        <ImgContainer>
          <StyledImg src={FeatureGrid3} />
        </ImgContainer>
        <ImgContainer>
          <StyledImg src={FeatureGrid4} />
        </ImgContainer>
      </FeatureGrid>
      <FeatureContent>
        <H3>Headline</H3>
        <Lead>Specially developed to help restore a more youthful appearance with improved radiance and bounce.</Lead>
        <FeatureList>
          <FeatureItem2 icon={FeatureIcon1} heading="Headline" subHeading="One line description" />
          <FeatureItem2 icon={FeatureIcon2} heading="Headline" subHeading="One line description" />
        </FeatureList>
        <Button>Buy now</Button>
      </FeatureContent>
    </Feature>
  );
};

export default FeatureSingle1;
