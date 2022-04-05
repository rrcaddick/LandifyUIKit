import React from "react";
import styled from "styled-components";
import { Colors } from "../../Theme";
import H2 from "../styled/H2.styled";
import Lead from "../styled/Lead.styled";
import QuoteIcon from "../../images/icons/Quote.svg";
import AirbnbLogo from "../../images/AirbnbLogo.svg";
import HubspotLogo from "../../images/HubspotLogo.svg";
import BookMyShowLogo from "../../images/BookMyShowLogo.svg";
import TestimonialItem7 from "./TestimonialItem/TestimonialItem7";

const Testimonial = styled.section`
  padding: 12rem 16.5rem 8rem;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(4, auto) 1rem;
  gap: 3rem;
  background-color: ${Colors.Brand.Turquoise100};
`;

const TestimonialText = styled.div`
  color: ${Colors.Text.Gray900};
  grid-column: 2/6;
  grid-row: 1;
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
const DUMMY_TESTIMONIALS = [
  {
    id: "t1",
    logo: AirbnbLogo,
    quote:
      "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
    author: "Jane Cooper",
    jobTitle: "CEO, Airbnb",
    column: "6/10",
    row: "1/2 span ",
    mt: "4.8rem",
  },
  {
    id: "t2",
    logo: HubspotLogo,
    quote:
      "To quickly start my startup landing page design, I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
    author: "Floyd Miles",
    jobTitle: "Vice President, GoPro",
    column: "3/6",
    row: "2 / span 3",
  },
  {
    id: "t3",
    logo: BookMyShowLogo,
    quote: "Landify saved our time in designing my company page.",
    author: "Kristin Watson",
    jobTitle: "Co-Founder, BookMyShow",
    column: "6/9",
    row: "3 / span 3",
  },
];

const Testimonial7 = () => {
  return (
    <Testimonial>
      <TestimonialText>
        <H2>Real Stories from Real Customers</H2>
        <Lead>Get inspired by these stories.</Lead>
      </TestimonialText>
      {DUMMY_TESTIMONIALS.map((testimonial) => (
        <TestimonialItem7 key={testimonial.id} {...testimonial} />
      ))}
    </Testimonial>
  );
};

export default Testimonial7;
