import styled from "styled-components";
import CornerBorderImage from "../../resources/images/corner-border.png";
import Paper from "../../resources/images/paper.png";

export const WeddingLayout = styled.div`
  height: inherit;
  width: inherit;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7dbf0;
  background-image: url(${Paper});
  transition: transform ease-in-out 750ms;
  transform: translate(${({ closed }) => (closed ? "-100%" : "0%")});
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
