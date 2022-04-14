import React from "react";
import styled from "styled-components";
import { Colors } from "../../Theme";
import Lead from "../styled/Lead.styled";
import Subtitle from "../styled/Subtitle.styled";
import Body from "../styled/Body.styled";
import QuoteIcon from "../../images/icons/Quote.svg";
import Img from "../styled/Img.styled";
import TestimonialIcon from "../../images/icons/testimonialIcon.svg";

const Testimonial = styled.section`
  padding: 12rem 16.5rem 8rem;
  display: flex;
  gap: 8.9rem;
`;

const TestimonialImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  column-gap: 1.6rem;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  flex-direction: column;
`;

const JobTitle = styled(Body)`
  color: ${Colors.Text.Gray700};
`;

const TestimonialText = styled.div`
  color: ${Colors.Text.Gray900};
  flex: 3;
  position: relative;
  :after {
    content: "";
    position: absolute;
    min-height: 12rem;
    min-width: 14.3rem;
    background-image: url(${QuoteIcon});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 0;
    top: 0;
    left: 0;
    transform: translate(-65%, -45%);
  }
`;

const Testimonial2 = () => {
  return (
    <Testimonial>
      <TestimonialImage>
        <Img src={TestimonialIcon} />
        <TestimonialAuthor>
          <Subtitle>Jenny Wilson</Subtitle>
          <JobTitle size="sm">Vice President</JobTitle>
        </TestimonialAuthor>
      </TestimonialImage>
      <TestimonialText>
        <Lead>
          We had an incredible experience working with Landify and were impressed they made such a big difference in
          only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get
          familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and
          get more eyes on our product.
        </Lead>
      </TestimonialText>
    </Testimonial>
  );
};

export default Testimonial2;
