import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Colors } from "../../Theme";
import H2 from "../styled/H2.styled";
import TestimonialImage from "../../images/icons/testimonialIcon.svg";
import TestimonialSlide3 from "./TestimonialSlide/TestimonialSlide3";
import QuoteIcon from "../../images/icons/Quote.svg";
import Img from "../styled/Img.styled";

const DUMMY_TESTIMONIALS_SLIDES = [
  {
    id: "s1",
    testimonials: [
      {
        id: "t1",
        image: TestimonialImage,
        title: "Incredible Experience",
        quote:
          "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
        author: "Jane Cooper",
        jobTitle: "CEO at ABC Corporation",
      },
      {
        id: "t2",
        image: TestimonialImage,
        title: "Dependable, Responsive, Professional Partner",
        quote:
          "Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks & helps us formulate a vision and possibilities for future.",
        author: "Jane Cooper",
        jobTitle: "CEO at ABC Corporation",
      },
    ],
  },
  {
    id: "s2",
    testimonials: [
      {
        id: "t3",
        image: TestimonialImage,
        title: "Incredible Experience Slide 2",
        quote:
          "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
        author: "Jane Cooper",
        jobTitle: "CEO at ABC Corporation",
      },
      {
        id: "t4",
        image: TestimonialImage,
        title: "Dependable, Responsive, Professional Partner",
        quote:
          "Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks & helps us formulate a vision and possibilities for future.",
        author: "Jane Cooper",
        jobTitle: "CEO at ABC Corporation",
      },
    ],
  },
  {
    id: "s3",
    testimonials: [
      {
        id: "t5",
        image: TestimonialImage,
        title: "Incredible Experience Slide 3",
        quote:
          "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
        author: "Jane Cooper",
        jobTitle: "CEO at ABC Corporation",
      },
      {
        id: "t6",
        image: TestimonialImage,
        title: "Dependable, Responsive, Professional Partner",
        quote:
          "Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks & helps us formulate a vision and possibilities for future.",
        author: "Jane Cooper",
        jobTitle: "CEO at ABC Corporation",
      },
    ],
  },
];

const Testimonial = styled.section`
  padding: 6.4rem 16.5rem 11.8rem;
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
  background-color: ${Colors.Brand.Purple};
  color: ${Colors.Default.White};
  position: relative;
`;

const QuoteMark = styled(Img)`
  position: absolute;
  width: 17.5rem;
  height: 15rem;
  transform: rotate(180deg);
  top: 4.8rem;
  right: 9.6rem;
`;

const SlideContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const SlideControls = styled.div`
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
        return `background-color: ${Colors.Default.White};`;
      default:
        return `box-shadow: inset 0 0 0 0.2rem ${Colors.Default.White}
               `;
    }
  }}
`;

const Testimonial1 = () => {
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
      <QuoteMark src={QuoteIcon} width="17.5rem" height="15rem" />
      <H2>Our Clients Speak</H2>
      <SlideContainer>
        {DUMMY_TESTIMONIALS_SLIDES.map((slide) => (
          <TestimonialSlide3 key={slide.id} testimonials={slide.testimonials} slideIndex={slideIndex} />
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

export default Testimonial1;
