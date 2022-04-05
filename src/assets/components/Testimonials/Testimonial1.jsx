import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Colors } from "../../Theme";
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";
import TestimonialImage from "../../images/icons/testimonialIcon.svg";
import TestimonialSlide1 from "./TestimonialSlide/TestimonialSlide1";

const DUMMY_TESTIMONIALS_SLIDES = [
  {
    id: "s1",
    testimonials: [
      {
        id: "t1",
        image: TestimonialImage,
        title: "Efficient Collaborating",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
        author: "Jane Cooper",
        jobTitle: "CEO at ABC Corporation",
      },
      {
        id: "t2",
        image: TestimonialImage,
        title: "Intuitive Design",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
        author: "Jane Cooper",
        jobTitle: "CEO at ABC Corporation",
      },
      {
        id: "t3",
        image: TestimonialImage,
        title: "Mindblowing Service",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
        author: "Jane Cooper",
        jobTitle: "CEO at ABC Corporation",
      },
    ],
  },
  {
    id: "s2",
    testimonials: [
      {
        id: "t4",
        image: TestimonialImage,
        title: "Efficient Collaborating Slide 2",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
        author: "Jane Cooper",
        jobTitle: "CEO at ABC Corporation",
      },
      {
        id: "t5",
        image: TestimonialImage,
        title: "Intuitive Design",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
        author: "Jane Cooper",
        jobTitle: "CEO at ABC Corporation",
      },
      {
        id: "t6",
        image: TestimonialImage,
        title: "Mindblowing Service",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
        author: "Jane Cooper",
        jobTitle: "CEO at ABC Corporation",
      },
    ],
  },
  {
    id: "s3",
    testimonials: [
      {
        id: "t7",
        image: TestimonialImage,
        title: "Efficient Collaborating Slide 3",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
        author: "Jane Cooper",
        jobTitle: "CEO at ABC Corporation",
      },
      {
        id: "t8",
        image: TestimonialImage,
        title: "Intuitive Design",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
        author: "Jane Cooper",
        jobTitle: "CEO at ABC Corporation",
      },
      {
        id: "t9",
        image: TestimonialImage,
        title: "Mindblowing Service",
        quote:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
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
  background-color: ${Colors.Text.Gray100};
`;

const TestimonialText = styled.div`
  color: ${Colors.Text.Gray900};
  text-align: center;
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
  cursor: pointer;
  ${(props) => {
    switch (props.active) {
      case "true":
        return `background-color: ${Colors.Default.White};
                width: 1.4rem;
                height: 1.4rem;
                box-shadow: inset 0 0 0 0.3rem ${Colors.Brand.Turquoise}`;
      default:
        return `background-color: ${Colors.Brand.Turquoise};
                width: 0.8rem;
                height: 0.8rem;`;
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
      <TestimonialText>
        <H2>Our Clients Speak</H2>
        <Lead>We have been working with clients around the world</Lead>
      </TestimonialText>
      <SlideContainer>
        {DUMMY_TESTIMONIALS_SLIDES.map((slide) => (
          <TestimonialSlide1 key={slide.id} testimonials={slide.testimonials} slideIndex={slideIndex} />
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
