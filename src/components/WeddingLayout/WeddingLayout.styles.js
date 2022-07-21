import styled from "styled-components";
import CornerBorderImage from "../../resources/images/corner-border.png";
import Paper from "../../resources/images/paper.png";

export const WeddingLayout = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7dbf0;
  background-image: url(${Paper});
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
