import React from "react";
import styled from "styled-components";
import Img from "../../styled/Img.styled";
import Lead from "../../styled/Lead.styled";
import { Colors } from "../../../Theme";
import QuoteIcon from "../../../images/icons/Quote.svg";

const StyledTestimonialSlide = styled.div`
  display: flex;
  column-gap: 3rem;
  min-width: 100%;
  transform: translateX(${(props) => `${props.slide * -100}%`});
  transition: all 1s ease-in-out;
  overflow-y: visible;
`;

const TestimonialText = styled(Lead)`
  padding: 4rem 3.2rem 3.2rem 9.2rem;
  border-radius: 1rem;
  row-gap: 4.8rem;
  background-color: ${Colors.Default.White};
`;

const StyledImage = styled(Img)`
  position: absolute;
  left: 4rem;
  top: 3.2rem;
`;

const TestimonialSlide5 = ({ quote, slideIndex }) => {
  return (
    <StyledTestimonialSlide slide={slideIndex}>
      <StyledImage src={QuoteIcon} width="3.2rem" height="3.2rem" />
      <TestimonialText>{quote}</TestimonialText>
    </StyledTestimonialSlide>
  );
};

export default TestimonialSlide5;
