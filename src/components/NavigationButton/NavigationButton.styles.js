import styled from "styled-components";

export const NavigationButtonStyled = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  position: absolute;
  ${({ back }) => (back ? "left: 10px" : "right: 10px")}
`;

export const NavigationButtonImage = styled.img`
  height: 37px;
  width: 30px;
  ${({ back }) => back && "transform: rotate(180deg);"}
`;
