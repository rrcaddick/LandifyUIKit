import styled from "styled-components";
import { TextStyles } from "../../Theme";

const Subtitle = styled.span`
  ${(p) => {
    switch (p.weight) {
      case "medium":
        return TextStyles.Bundler(TextStyles.Subtitle.SubtitleMedium);
      default:
        return TextStyles.Bundler(TextStyles.Subtitle.Subtitle);
    }
  }}
`;
export default Subtitle;
