import React from "react";
import styled from "styled-components";
import TestimonialItem1 from "../TestimonialItem/TestimonialItem1";

const StyledTestimonialSlide = styled.div`
  display: flex;
  column-gap: 3rem;
  min-width: 100%;
  transform: translateX(${(props) => `${props.slide * -100}%`});
  transition: all 1s ease-in-out;
`;

const TestimonialSlide1 = ({ testimonials, slideIndex }) => {
  return (
    <StyledTestimonialSlide slide={slideIndex}>
      {testimonials.map((testimonial) => (
        <TestimonialItem1 key={testimonial.id} {...testimonial} />
      ))}
    </StyledTestimonialSlide>
  );
};

export default TestimonialSlide1;
