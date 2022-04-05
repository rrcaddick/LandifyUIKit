import React from "react";
import styled from "styled-components";
import { Colors, TextStyles } from "../../../Theme";
import Img from "../../styled/Img.styled";
import H5 from "../../styled/H5.styled";

const StyledTestimonialItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  row-gap: 2.9rem;
`;

const TestimonialText = styled.div`
  background-color: ${Colors.Default.White};
  border-radius: 1rem;
  padding: 4rem 4rem 5.3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: ${Colors.Text.Gray900};
  position: relative;
  :after {
    content: "";
    position: absolute;
    border-color: #fff transparent transparent transparent;
    border-style: solid;
    border-width: 1.55rem;
    height: 0;
    width: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    transform: translateY(100%);
  }
`;

const TestimonialQuote = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${Colors.Text.Gray900};
  text-align: center;
`;

const QuoteText = styled.blockquote`
  ${TextStyles.Bundler(TextStyles.Body.BodySm)};
`;

const QuoteAuthor = styled.figcaption`
  display: flex;
  flex-direction: column;
  ${TextStyles.Bundler(TextStyles.Subtitle.Subtitle)};
  color: ${Colors.Default.White};
`;

const JobTitle = styled.p`
  color: ${Colors.Default.White};
  ${TextStyles.Bundler(TextStyles.Body.BodySm)};
`;

const TestimonialItem1 = ({ image, title, quote, author, jobTitle }) => {
  return (
    <StyledTestimonialItem>
      <TestimonialText>
        <H5>{title}</H5>
        <QuoteText>{quote}</QuoteText>
      </TestimonialText>
      <TestimonialQuote>
        <Img src={image} />
        <QuoteAuthor>{author}</QuoteAuthor>
        <JobTitle>{jobTitle}</JobTitle>
      </TestimonialQuote>
    </StyledTestimonialItem>
  );
};

export default TestimonialItem1;
