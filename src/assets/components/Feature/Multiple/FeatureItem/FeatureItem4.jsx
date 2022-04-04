import React from "react";
import styled from "styled-components";
import Img from "../../../styled/Img.styled";
import H5 from "../../../styled/H5.styled";
import Body from "../../../styled/Body.styled";
import LinkLabelIcon from "../../../styled/LinkLabelIcon.styled";
import { Colors } from "../../../../Theme";

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${Colors.Default.White};
  padding: 4rem 3.2rem;
  border-radius: 0.8rem;
  min-width: 35rem;
`;

const StyledImg = styled(Img)`
  margin-bottom: 5.6rem;
  min-width: 3.2rem;
  min-height: 3.2rem;
`;

const Title = styled(H5)`
  margin-bottom: 1.2rem;
`;

const Description = styled(Body)`
  margin-bottom: 4rem;
`;

const FeatureItem5 = ({ icon, heading, description }) => {
  return (
    <FeatureItem>
      <StyledImg src={icon} />
      <Title>{heading}</Title>
      <Description>{description}</Description>
      <LinkLabelIcon>Explore</LinkLabelIcon>
    </FeatureItem>
  );
};

export default FeatureItem5;
