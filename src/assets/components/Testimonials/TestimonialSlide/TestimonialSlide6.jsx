import React from "react";
import styled from "styled-components";
import { Colors } from "../../../Theme";
import Img from "../../styled/Img.styled";
import Subtitle from "../../styled/Subtitle.styled";
import Body from "../../styled/Body.styled";
import Lead from "../../styled/Lead.styled";

const StyledTestimonialSlide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 2.4rem;
  min-width: 100%;
  transform: translateX(${(props) => `${props.slide * -100}%`});
  transition: all 1s ease-in-out;
  background-color: ${Colors.Default.White};
  padding: 13.2rem 4rem 0 4rem;
`;

const AuthorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 1.6rem;
`;

const Author = styled.div`
  display: flex;
  flex-direction: column;
`;

const TestimonialSlide6 = ({ image, quote, author, jobTitle, slideIndex }) => {
  return (
    <StyledTestimonialSlide slide={slideIndex}>
      <AuthorContainer>
        <Img src={image} />
        <Author>
          <Subtitle>{author}</Subtitle>
          <Body>{jobTitle}</Body>
        </Author>
      </AuthorContainer>
      <Lead>{quote}</Lead>
    </StyledTestimonialSlide>
  );
};

export default TestimonialSlide6;
