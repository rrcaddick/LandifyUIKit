import React from "react";
import styled from "styled-components";
import Img from "../../../styled/Img.styled";
import H5 from "../../../styled/H5.styled";
import Body from "../../../styled/Body.styled";
import { Colors } from "../../../../Theme";

const FeatureItem = styled.div`
  display: flex;
  gap: 4rem;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.4rem;
  min-height: 7.4rem;
  min-width: 7.4rem;
  background-color: ${Colors.Text.Gray100};
  border-radius: 50%;
`;

const FeatureText = styled.div``;

const FeatureItem5 = ({ icon, heading, description }) => {
  return (
    <FeatureItem>
      <IconContainer>
        <Img src={icon} />
      </IconContainer>
      <FeatureText>
        <H5>{heading}</H5>
        <Body>{description}</Body>
      </FeatureText>
    </FeatureItem>
  );
};

export default FeatureItem5;
