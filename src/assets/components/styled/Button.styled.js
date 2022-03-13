import styled from "styled-components";
import { TextStyles, Colors } from "../../Theme";

const Button = styled.button`
  border: none;
  transition-property: background-color, color, border-color;
  transition-duration: 0.3s;
  border-radius: 0.6rem;
  cursor: pointer;

  /* background-color: ${Colors.Brand.Purple100};
  color: ${Colors.Brand.Purple};
  :hover {
    background-color: ${Colors.Brand.Purple800};
    color: ${Colors.Default.White};
  } */

  ${(props) => {
    switch (props.styleType) {
      case "secondary":
        return `
          background-color: ${Colors.Brand.Purple100};
          color: ${Colors.Brand.Purple};
          :hover {
            background-color: ${Colors.Brand.Purple800};
            color: ${Colors.Default.White};
          }
        `;
      case "outline":
        return `
          background-color: transparent;
          box-shadow: inset 0 0 0 0.1rem ${Colors.Default.White};
          color: ${Colors.Default.White};
          :hover {
            background-color: ${Colors.Default.White};
            color: ${Colors.Default.Black};
          }
        `;
      default:
        return `
          background-color: ${Colors.Brand.Purple};
          color: ${Colors.Default.White};
          :hover {
            background-color: ${Colors.Brand.Purple800};
            color: ${Colors.Default.Black};
          }
        `;
    }
  }}
  ${(props) => {
    switch (props.size) {
      case "sm":
        return `${TextStyles.Bundler(TextStyles.Label.Small)} padding: 0.6rem 1.2rem;`;
      case "lg":
        return `${TextStyles.Bundler(TextStyles.Label.Large)} padding: 1.2rem 3.2rem;`;
      default:
        return `${TextStyles.Bundler(TextStyles.Label.Large)} padding: 1rem 2rem;`;
    }
  }};
`;

export default Button;
