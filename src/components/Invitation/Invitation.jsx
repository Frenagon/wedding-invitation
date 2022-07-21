import WeddingLayout from "../WeddingLayout";
import NavigationButton from "../NavigationButton";

function Invitation({ closed }) {
  return (
    <WeddingLayout closed={closed}>
      <NavigationButton back />
      This will be the Invitation
      <NavigationButton />
    </WeddingLayout>
  );
}

export default Invitation;
