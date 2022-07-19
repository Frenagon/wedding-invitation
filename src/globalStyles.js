import styled, { createGlobalStyle } from "styled-components";
import Paper from "./resources/images/paper.png";
import CornerBorderImage from "./resources/images/corner-border.png";

const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    margin: 0px;
    background: #F7DBF0;
    background-image: url(${Paper});
  }

  body {
    height: inherit;
    width: inherit;
    margin: inherit;
  }

  div#root {
    height: inherit;
    width: inherit;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
