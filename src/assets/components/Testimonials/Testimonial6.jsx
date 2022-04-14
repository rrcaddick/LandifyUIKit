import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Colors } from "../../Theme";
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";
import TestimonialImage from "../../images/icons/testimonialIcon.svg";
import TestimonialSlide6 from "./TestimonialSlide/TestimonialSlide6";
import QuoteIcon from "../../images/icons/Quote.svg";
import NextSlide from "../../images/icons/NextSlide.svg";
import PreviousSlide from "../../images/icons/PreviousSlide.svg";
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
  {
    id: "t4",
    image: TestimonialImage,
    quote:
      "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the product concept so quickly. It acted as a catalyst to take our design to the next level and get more eyes on our product.",
    author: "Jane Cooper",
    jobTitle: "CEO at ABC Corporation",
  },
  {
    id: "t5",
    image: TestimonialImage,
    quote:
      "Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. The team is always thinking beyond the current tasks & helps us formulate a vision and possibilities for future.",
    author: "Scarlett Johansson",
    jobTitle: "CEO at Xion",
  },
];

const Testimonial = styled.section`
  display: flex;
  color: ${Colors.Text.Gray900};
  position: relative;
`;

const TestimonialHeader = styled.div`
  width: 50%;
  background-color: ${Colors.Brand.Turquoise};
`;

const TestimonialContent = styled.div`
  width: 50%;
  padding: 3.2rem 16.5rem 3.2rem 0;
  background-color: ${Colors.Brand.Turquoise100};
`;

const TestimonialText = styled.div`
  padding: 24.6rem 9.5rem 24.6rem 16.5rem;
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
  height: 100%;
  position: relative;
`;

const SlideControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.2rem;
  position: absolute;
  bottom: 4rem;
  right: 4rem;
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

const Testimonial6 = () => {
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
    const maxSlide = DUMMY_TESTIMONIALS_SLIDES.length - 1;

    if (e.target.dataset.direction === "right") {
      setSlideIndex((prevState) => {
        if (prevState === maxSlide) {
          setSlideIndex(0);
        } else {
          setSlideIndex(prevState + 1);
        }
      });
    }

    if (e.target.dataset.direction === "left") {
      setSlideIndex((prevState) => {
        if (prevState === 0) {
          setSlideIndex(maxSlide);
        } else {
          setSlideIndex(prevState - 1);
        }
      });
    }
  };

  return (
    <Testimonial>
      <TestimonialHeader>
        <TestimonialText>
          <H2>Happy Customers</H2>
          <Lead>Feedback from these happy customers helps us in reaching the heights</Lead>
        </TestimonialText>
      </TestimonialHeader>
      <TestimonialContent>
        <SlideContainer>
          {DUMMY_TESTIMONIALS_SLIDES.map((testimonial) => (
            <TestimonialSlide6 key={testimonial.id} {...testimonial} slideIndex={slideIndex} />
          ))}
          <SlideControls>
            <Img src={PreviousSlide} data-direction="left" onClick={slideHandler} />
            <Img src={NextSlide} data-direction="right" onClick={slideHandler} />
          </SlideControls>
        </SlideContainer>
      </TestimonialContent>
    </Testimonial>
  );
};

export default Testimonial6;
