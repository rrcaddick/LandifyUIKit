import React from "react";
import styled from "styled-components";
import Img from "../../../styled/Img.styled";
import H5 from "../../../styled/H5.styled";
import Body from "../../../styled/Body.styled";
import LinkLabelIcon from "../../../styled/LinkLabelIcon.styled";

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 2.4rem;
`;

const StyledImg = styled(Img)`
  min-height: 3.2rem;
  min-width: 3.2rem;
`;

const FeatureItem3 = ({ icon, heading, description }) => {
  return (
    <FeatureItem>
      <StyledImg src={icon} />
      <H5>{heading}</H5>
      <Body>{description}</Body>
      <LinkLabelIcon>Know More</LinkLabelIcon>
    </FeatureItem>
  );
};

export default FeatureItem3;
