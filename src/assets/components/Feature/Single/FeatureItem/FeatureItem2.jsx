import React from "react";
import styled from "styled-components";
import Img from "../../../styled/Img.styled";
import H6 from "../../../styled/H6.styled";
import Body from "../../../styled/Body.styled";

const FeatureItem = styled.li`
  display: flex;
  column-gap: 1.6rem;
`;
const FeatureText = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeatureItem2 = ({ icon, heading, subHeading }) => {
  return (
    <FeatureItem>
      <Img src={icon} width="3.2rem" height="3.2rem" />
      <FeatureText>
        <H6>{heading}</H6>
        <Body>{subHeading}</Body>
      </FeatureText>
    </FeatureItem>
  );
};

export default FeatureItem2;
