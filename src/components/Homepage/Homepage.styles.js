import styled from "styled-components";
import Paper from "../../resources/images/paper.png";

export const HomepageContainer = styled.div`
  height: inherit;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7dbf0;
  background-image: url(${Paper});
`;

export const Logo = styled.img`
  height: 212px;
  width: 215px;
`;
