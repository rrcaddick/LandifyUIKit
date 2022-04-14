import React from "react";
import styled from "styled-components";
import Img from "../../styled/Img.styled";
import Lead from "../../styled/Lead.styled";
import Subtitle from "../../styled/Subtitle.styled";
import Body from "../../styled/Body.styled";
import { Colors } from "../../../Theme";
import QuoteIcon from "../../../images/icons/Quote.svg";

const StyledTestimonialSlide = styled.div`
  display: flex;
  column-gap: 3rem;
  min-width: 100%;
  transform: translateX(${(props) => `${props.slide * -100}%`});
  transition: all 1s ease-in-out;
`;

const TestimonialText = styled.div`
  padding: 14.8rem 0 0 16.5rem;
  flex: 2;
  display: flex;
  flex-direction: column;
  row-gap: 4.8rem;
  position: relative;
`;

const QuoteMark = styled(Img)`
  position: absolute;
  top: 11.6rem;
  left: 11.6rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
`;

const Author = styled(Subtitle)`
  color: ${Colors.Brand.Turquoise};
`;

const TestimonialImage = styled.div`
  padding: 4rem 16.5rem 0 0;
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const TestimonialSlide4 = ({ image, quote, author, jobTitle, slideIndex }) => {
  return (
    <StyledTestimonialSlide slide={slideIndex}>
      <TestimonialText>
        <QuoteMark src={QuoteIcon} width="7.1rem" height="6rem" />
        <Lead>{quote}</Lead>
        <TestimonialAuthor>
          <Author>{author}</Author>
          <Body>{jobTitle}</Body>
        </TestimonialAuthor>
      </TestimonialText>
      <TestimonialImage>
        <Img src={image} />
      </TestimonialImage>
    </StyledTestimonialSlide>
  );
};

export default TestimonialSlide4;
