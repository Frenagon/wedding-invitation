import WeddingLayout from "../WeddingLayout";
import NavigationButton from "../NavigationButton";

function Invitation() {
  return (
    <WeddingLayout>
      <NavigationButton back />
      This will be the Invitation
      <NavigationButton />
    </WeddingLayout>
  );
}

export default Invitation;
