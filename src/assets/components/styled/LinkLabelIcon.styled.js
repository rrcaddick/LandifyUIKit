import React from "react";
import styled from "styled-components";
import ArrowSm from "../../images/icons/ArrowRightS.svg";
import Arrow from "../../images/icons/ArrowRight.svg";
import ArrowLg from "../../images/icons/ArrowRightL.svg";
import Img from "./Img.styled";
import { Colors, TextStyles } from "../../Theme";

const LinkLabelIconEl = styled.a`
  display: flex;
  align-items: center;
  color: ${Colors.Brand.Purple};
  ${(props) => {
    switch (props.size) {
      case "sm":
        return TextStyles.Bundler(TextStyles.Label.Small);
      case "lg":
        return TextStyles.Bundler(TextStyles.Label.Large);
      default:
        return TextStyles.Bundler(TextStyles.Label.Medium);
    }
  }};
  > img {
    margin-left: 0.8rem;
  }
  :visited {
    color: ${Colors.Brand.Purple};
  }
`;

const LinkLabelIcon = ({ children, size, icon = "true", ...linkProps }) => {
  return (
    <LinkLabelIconEl size={size} {...linkProps}>
      {children}
      {size === "sm" && icon === "true" && <Img src={ArrowSm} width="1.6rem" height="1.6rem" />}
      {(!size || size === "md") && icon === "true" && <Img src={Arrow} width="2rem" height="2rem" />}
      {size === "lg" && icon === "true" && <Img src={ArrowLg} width="2.4rem" height="2.4rem" />}
    </LinkLabelIconEl>
  );
};

export default LinkLabelIcon;
