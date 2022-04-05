import React from "react";
import styled from "styled-components";
import { Colors, TextStyles } from "../../../Theme";
import Img from "../../styled/Img.styled";
import Lead from "../../styled/Lead.styled";
import Subtitle from "../../styled/Subtitle.styled";
import QuoteIcon from "../../../images/icons/Quote.svg";

const StyledTestimonialItem = styled.div`
  grid-column: ${(props) => props.column};
  grid-row: ${(props) => props.row};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 3.2rem;
  margin-top: ${(props) => props.mt && props.mt};
  padding: 3.2rem;
  background-color: ${Colors.Default.White};
  border-radius: 0.8rem;
`;

const TestimonialQuote = styled.figure`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
  margin-left: 3.2rem;
  color: ${Colors.Text.Gray900};
`;

const QuoteText = styled.blockquote`
  ${TextStyles.Bundler(TextStyles.Lead.Lead)};
  position: relative;
  :before {
    content: "";
    position: absolute;
    min-height: 1.4rem;
    min-width: 1.6rem;
    background-image: url(${QuoteIcon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
    top: 0;
    left: 0;
    transform: translateX(-2.8rem);
  }
`;

const QuoteAuthor = styled.figcaption`
  display: flex;
  flex-direction: column;
`;

const JobTitle = styled(Lead)`
  color: ${Colors.Text.Gray700};
`;

const TestimonialItem7 = ({ logo, quote, author, jobTitle, column, row, mt }) => {
  return (
    <StyledTestimonialItem column={column} row={row} mt={mt}>
      <Img src={logo} width="13rem" height="4rem" />
      <TestimonialQuote>
        <QuoteText>{quote}</QuoteText>
        <QuoteAuthor>
          <Subtitle>{author}</Subtitle>
          <JobTitle size="sm">{jobTitle}</JobTitle>
        </QuoteAuthor>
      </TestimonialQuote>
    </StyledTestimonialItem>
  );
};

export default TestimonialItem7;
