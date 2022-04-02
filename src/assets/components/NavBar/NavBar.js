import React from "react";
import styled from "styled-components";
import { Colors, TextStyles } from "../../Theme";

const NavBarEl = styled.nav`
  display: flex;
  column-gap: 3.2rem;
  align-items: center;
  color: ${Colors.Default.Gray900};
  ${TextStyles.Bundler(TextStyles.Label.Medium)}
`;
const NavItem = styled.a`
  :visited {
    color: ${Colors.Default.Gray900};
  }
`;

const NavBar = ({ links }) => {
  return (
    <NavBarEl>
      {links.map((link) => (
        <NavItem key={link.id} href={link.href}>
          {link.title}
        </NavItem>
      ))}
    </NavBarEl>
  );
};

export default NavBar;
