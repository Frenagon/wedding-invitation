import styled from "styled-components";
import Paper from "../../resources/images/paper.png";

export const InstructionsContainer = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7dbf0;
  background-image: url(${Paper});
`;
