import React from "react";
import styled from "styled-components";
import Img from "../styled/Img.styled";
import Logo from "../../images/DarkLogo.svg";
import Button from "../styled/Button.styled";
import NavBar from "../NavBar/NavBar";

const HeaderEl = styled.header`
  padding: 1.6rem 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LeftPart = styled.span`
  display: flex;
  align-items: center;
  column-gap: 3.2rem;
  margin-left: 16.5rem;
`;
const RightPart = styled.span`
  display: flex;
  align-items: center;
  column-gap: 4.8rem;
  margin-right: 16.5rem;
`;

const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const navLinks = [
  {
    id: 1,
    title: "How it works",
    href: "#",
  },
  {
    id: 2,
    title: "About us",
    href: "#",
  },
  {
    id: 3,
    title: "Partners",
    href: "#",
  },
  {
    id: 4,
    title: "Testimonials",
    href: "#",
  },
  {
    id: 5,
    title: "Support",
    href: "#",
  },
];

const Header2 = () => {
  return (
    <HeaderEl>
      <LeftPart>
        <LogoContainer href="#">
          <Img src={Logo} />
        </LogoContainer>
      </LeftPart>

      <RightPart>
        <NavBar links={navLinks} />
        <Button>Buy now</Button>
      </RightPart>
    </HeaderEl>
  );
};

export default Header2;
