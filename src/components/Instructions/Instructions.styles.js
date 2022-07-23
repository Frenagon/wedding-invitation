import styled from "styled-components";

export const InstructionsContainer = styled.div`
  height: inherit;
  width: inherit;
  margin: 10px;
  padding: 75px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Indie Flower", cursive;
  color: #393939;
  font-size: 0.813rem;
  text-align: center;
`;

export const HeaderContainer = styled.div`
  height: 10vh;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  * {
    padding-bottom: 15px;
  }
`;

export const HeaderImage = styled.img`
  height: 15px;
  width: 15px;
`;

export const TimelineContainer = styled.div`
  height: 54vh;
  min-height: 54%;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-family: "Righteous", cursive;
  font-size: 0.875rem;
  color: #807040;
`;

export const TimelineImage = styled.img`
  height: inherit;
  min-height: 40%;
  position: absolute;
`;

export const TimelineSection = styled.div`
  min-height: 33%;
  width: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TimelineSubSection = styled.div`
  height: 85px;
  width: 50%;
  display: flex;
  justify-content: ${({ alignLeft }) =>
    alignLeft ? "flex-start" : "flex-end"};
  align-items: center;
`;

export const LinkImage = styled.a`
  img {
    height: 45px;
    width: 45px;
  }

  ${({ paddingLeft }) =>
    paddingLeft ? "padding-left: 10px" : "padding-right: 10px"};
`;

export const Time = styled.span`
  ${({ paddingLeft }) =>
    paddingLeft ? "padding-left: 8px" : "padding-right: 8px"}
`;

export const TimelineDescription = styled.div`
  width: 105px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TimelineTitle = styled.span`
  padding-bottom: 2px;
  padding-top: 18px;
`;

export const TimelineSubTitle = styled.span`
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 0.563rem;
`;

export const TimelineDescriptionSeparator = styled.div`
  height: 2px;
  width: inherit;
  background-color: #807040;
`;

export const TimelineLinkStack = styled.div`
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  ${({ paddingLeft }) =>
    paddingLeft ? "padding-left: 10px" : "padding-right: 10px"}
`;

export const LinkStackImage = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  * {
    padding-right: 6px;
  }
`;

export const FooterContainer = styled.div`
  height: 10vh;
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  * {
    padding-top: 20px;
  }
`;

export const NoteTextSmall = styled.span`
  font-size: 0.625rem;
`;
