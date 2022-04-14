import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Colors } from "../../Theme";
import TestimonialImage from "../../images/icons/testimonialIcon.svg";
import TestimonialSlide5 from "./TestimonialSlide/TestimonialSlide5";
import Img from "../styled/Img.styled";
import Subtitle from "../styled/Subtitle.styled";
import Body from "../styled/Body.styled";

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
  flex-direction: column;
  background-color: ${Colors.Brand.Turquoise100};
  padding: 8rem 29.3rem 0;
  row-gap: 3.6rem;
`;

const SlideContainer = styled.div`
  display: flex;
  overflow: hidden;
`;

const SlideControls = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 8rem;
`;

const SlideControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.6rem;
  cursor: pointer;
`;

const ImageContainer = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  :after {
    content: "";
    position: absolute;
    border-color: ${Colors.Default.White} transparent transparent transparent;
    ${(props) => `${props.active ? "opacity: 1" : "opacity:0"}`};
    border-style: solid;
    border-width: 1.55rem;
    height: 0;
    width: 0;
    top: -3.6rem;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Author = styled.span`
  display: flex;
  flex-direction: column;
  transition: transform 0.3s, opacity 0.5s ease-in-out;
  overflow: hidden;
  ${(props) => {
    switch (props.active) {
      case "true":
        return `transform: translateX(0);
                opacity: 1;
                width: 100%`;
      default:
        return `transform: translateX(-100%);
                opacity: 0;
                width: 0;
                height: 0`;
    }
  }}
`;

const Testimonial5 = () => {
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
    const control = e.target.closest("div");
    clearInterval(slideInterval.current);
    setSlideIndex(+control.dataset.slide);
  };

  return (
    <Testimonial>
      <SlideContainer>
        {DUMMY_TESTIMONIALS_SLIDES.map((slide) => (
          <TestimonialSlide5 key={slide.id} {...slide} slideIndex={slideIndex} />
        ))}
      </SlideContainer>
      <SlideControls>
        {DUMMY_TESTIMONIALS_SLIDES.map((slide, i) => (
          <SlideControl onClick={slideHandler} key={i} data-slide={i}>
            <ImageContainer active={slideIndex === i && "true"}>
              <Img src={slide.image} />
            </ImageContainer>
            <Author active={slideIndex === i && "true"}>
              <Subtitle>{slide.author}</Subtitle>
              <Body>{slide.jobTitle}</Body>
            </Author>
          </SlideControl>
        ))}
      </SlideControls>
    </Testimonial>
  );
};

export default Testimonial5;
