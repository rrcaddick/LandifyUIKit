import styled from "styled-components";
import { TextStyles } from "../../Theme";

const Body = styled.p`
  ${(p) => {
    switch (p.size) {
      case "sm":
        return TextStyles.Bundler(TextStyles.Body.BodySm);
      default:
        return TextStyles.Bundler(TextStyles.Body.Body);
    }
  }}
`;
export default Body;
