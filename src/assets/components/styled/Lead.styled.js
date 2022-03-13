import styled from "styled-components";
import { TextStyles } from "../../Theme";

const Lead = styled.span`
  ${(p) => {
    switch (p.size) {
      case "sm":
        return TextStyles.Bundler(TextStyles.Lead.LeadSm);
      default:
        return TextStyles.Bundler(TextStyles.Lead.Lead);
    }
  }}
`;

export default Lead;
