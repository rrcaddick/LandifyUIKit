import React from "react";
import styled from "styled-components";
import Img from "../../../styled/Img.styled";
import Subtitle from "../../../styled/Subtitle.styled";

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
`;

const StyledImg = styled(Img)`
  width: 100%;
  border-radius: 0.4rem;
`;

const FeatureItem5 = ({ image, description }) => {
  return (
    <FeatureItem>
      <StyledImg src={image} />
      <Subtitle weight="medium">{description}</Subtitle>
    </FeatureItem>
  );
};

export default FeatureItem5;
