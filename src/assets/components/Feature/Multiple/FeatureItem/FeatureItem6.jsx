import React from "react";
import styled from "styled-components";
import Img from "../../../styled/Img.styled";
import H5 from "../../../styled/H5.styled";
import { Colors, Shadows } from "../../../../Theme";

const FeatureItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  row-gap: 5.6rem;
  background-color: ${Colors.Default.White};
  padding: 2.4rem;
  border-radius: 0.8rem;
  box-shadow: ${Shadows.Dark2};
`;

const StyledImg = styled(Img)`
  min-width: 3.2rem;
  min-height: 3.2rem;
`;

const Title = styled(H5)`
  margin-bottom: 1.2rem;
`;

const FeatureItem6 = ({ icon, heading }) => {
  return (
    <FeatureItem>
      <Title>{heading}</Title>
      <StyledImg src={icon} />
    </FeatureItem>
  );
};

export default FeatureItem6;
