import { CornerBorder } from "../../globalStyles";
import NavigationButton from "../NavigationButton";
import { InvitationContainer } from "./Invitation.styles";

function Invitation() {
  return (
    <InvitationContainer>
      <CornerBorder top left />
      <CornerBorder top right rotate="90deg" />
      <NavigationButton back />
      This will be the Invitation
      <NavigationButton />
      <CornerBorder bottom left rotate="-90deg" />
      <CornerBorder bottom right rotate="180deg" />
    </InvitationContainer>
  );
}

export default Invitation;
