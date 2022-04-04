import React from "react";
import styled from "styled-components";
import Img from "../../../styled/Img.styled";
import H5 from "../../../styled/H5.styled";
import Body from "../../../styled/Body.styled";

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledImg = styled(Img)`
  margin-bottom: 2.4rem;
`;

const FeatureItem5 = ({ icon, heading, description }) => {
  return (
    <FeatureItem>
      <StyledImg src={icon} />
      <H5>{heading}</H5>
      <Body>{description}</Body>
    </FeatureItem>
  );
};

export default FeatureItem5;
