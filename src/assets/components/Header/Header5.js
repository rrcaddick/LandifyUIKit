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

const Middle = styled.span``;

const RightPart = styled.span`
  display: flex;
  align-items: center;
  column-gap: 1.2rem;
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
    title: "About",
    href: "#",
  },
  {
    id: 2,
    title: "Pricing",
    href: "#",
  },
  {
    id: 3,
    title: "Contact",
    href: "#",
  },
];

const Header4 = () => {
  return (
    <HeaderEl>
      <LeftPart>
        <NavBar links={navLinks} />
      </LeftPart>
      <Middle>
        <LogoContainer href="#">
          <Img src={Logo} />
        </LogoContainer>
      </Middle>
      <RightPart>
        <Button styleType="secondary">Login</Button>
        <Button>Sign up</Button>
      </RightPart>
    </HeaderEl>
  );
};

export default Header4;
