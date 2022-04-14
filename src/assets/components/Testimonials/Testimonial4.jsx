import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Colors } from "../../Theme";
import TestimonialImage from "../../images/TestimonialPortrait.svg";
import TestimonialSlide4 from "./TestimonialSlide/TestimonialSlide4";
import Img from "../styled/Img.styled";

const DUMMY_TESTIMONIALS_SLIDES = [
  {
    id: "t1",
    image: TestimonialImage,
    quote:
      "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
    author: "Jane Cooper",
    jobTitle: "CEO at ABC Corporation",
  },
  {
    id: "t2",
    image: TestimonialImage,
    quote:
      "Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks & helps us formulate a vision and possibilities for future.",
    author: "Scarlett Johansson",
    jobTitle: "CEO at Xion",
  },
  {
    id: "t3",
    image: TestimonialImage,
    quote:
      "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
    author: "Jane Cooper",
    jobTitle: "CEO at ABC Corporation",
  },
];

const Testimonial = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.Brand.Turquoise100};
  position: relative;
`;

const SlideContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const SlideControls = styled.div`
  position: absolute;
  left: 16.5rem;
  bottom: 8rem;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
`;

const SlideControl = styled.span`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
  ${(props) => {
    switch (props.active) {
      case "true":
        return `background-color: ${Colors.Brand.Turquoise};`;
      default:
        return `background-color: ${Colors.Text.Gray300};`;
    }
  }}
`;

const Testimonial4 = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  let slideInterval = useRef();
  useEffect(() => {
    const maxSlide = DUMMY_TESTIMONIALS_SLIDES.length - 1;
    slideInterval.current = setInterval(() => {
      setSlideIndex((prevState) => {
        if (prevState === maxSlide) {
          setSlideIndex(0);
        } else {
          setSlideIndex(prevState + 1);
        }
      });
    }, 5000);

    return () => {
      clearInterval(slideInterval.current);
    };
  }, [slideIndex]);

  const slideHandler = (e) => {
    clearInterval(slideInterval.current);
    setSlideIndex(+e.target.dataset.slide);
  };

  return (
    <Testimonial>
      <SlideContainer>
        {DUMMY_TESTIMONIALS_SLIDES.map((slide) => (
          <TestimonialSlide4 key={slide.id} {...slide} slideIndex={slideIndex} />
        ))}
      </SlideContainer>
      <SlideControls>
        {DUMMY_TESTIMONIALS_SLIDES.map((slide, i) => (
          <SlideControl onClick={slideHandler} key={i} data-slide={i} active={slideIndex === i && "true"} />
        ))}
      </SlideControls>
    </Testimonial>
  );
};

export default Testimonial4;
