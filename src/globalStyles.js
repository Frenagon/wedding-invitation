import styled, { createGlobalStyle } from "styled-components";
import CornerBorderImage from "./resources/images/corner-border.png";

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    margin: 0px;
  }

  body, div#root {
    height: inherit;
    width: inherit;
    margin: inherit;
  }
`;

export const CornerBorder = styled.div`
  position: absolute;
  ${({ top, bottom, left, right }) => {
    return (
      (top ? "top: 0;" : "") +
      (bottom ? "bottom: 0;" : "") +
      (left ? "left: 0;" : "") +
      (right ? "right: 0;" : "")
    );
  }};
  transform: rotate(${({ rotate }) => rotate});
  background-image: url(${CornerBorderImage});
  background-repeat: no-repeat;
  background-size: 75px;
  height: 75px;
  width: 75px;
  margin: 10px;
`;

export default GlobalStyles;
