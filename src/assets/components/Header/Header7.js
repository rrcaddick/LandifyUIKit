import React from "react";
import styled from "styled-components";
import Img from "../styled/Img.styled";
import Logo from "../../images/DarkLogo.svg";
import GooglePlay from "../../images/GooglePlay.svg";
import AppStore from "../../images/AppStore.svg";
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
`;
const RightPart = styled.span`
  display: flex;
  align-items: center;
  column-gap: 1.2rem;
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
    title: "Products",
    href: "#",
  },
  {
    id: 3,
    title: "Pricing",
    href: "#",
  },
  {
    id: 4,
    title: "Blog",
    href: "#",
  },
  {
    id: 5,
    title: "Jobs",
    href: "#",
  },
  {
    id: 6,
    title: "More",
    href: "#",
  },
];

const Header7 = () => {
  return (
    <HeaderEl>
      <LeftPart>
        <LogoContainer href="#">
          <Img src={Logo} />
        </LogoContainer>
        <NavBar links={navLinks} />
      </LeftPart>

      <RightPart>
        <Img src={GooglePlay} />
        <Img src={AppStore} />
      </RightPart>
    </HeaderEl>
  );
};

export default Header7;
