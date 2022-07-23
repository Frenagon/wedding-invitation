import styled from "styled-components";

export const InvitationContainer = styled.div`
  height: inherit;
  width: inherit;
  max-width: 1000px;
  margin: 10px;
  padding: 75px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Handlee", cursive;
  color: #393939;
  font-size: 0.813rem;
  text-align: center;
`;

export const InvitationSection = styled.div`
  flex-basis: 20%;
  display: flex;
  align-items: center;
`;

export const ParentNames = styled(InvitationSection)`
  width: inherit;
  font-size: 0.75rem;
  display: flex;
  justify-content: space-around;
`;

export const ParentsBride = styled.span`
  text-align: left;
`;

export const ParentsGroom = styled.span`
  text-align: right;
`;

export const SpouceNames = styled(InvitationSection)`
  font-family: "Ms Madi", cursive;
  font-size: 2.188rem;
  color: #675a34;
`;

export const LocationSection = styled(InvitationSection)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const FatherName = styled.span`
  font-size: 0.75rem;
`;

export const FooterSection = styled(InvitationSection)`
  width: inherit;
  font-size: 0.75rem;
  display: flex;
  justify-content: space-evenly;
`;
