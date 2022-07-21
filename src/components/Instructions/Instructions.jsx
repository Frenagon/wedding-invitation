import WeddingLayout from "../WeddingLayout";
import NavigationButton from "../NavigationButton";

function Instructions({ closed }) {
  return (
    <WeddingLayout closed={closed}>
      <NavigationButton back />
      This will be the Instructions
    </WeddingLayout>
  );
}

export default Instructions;
