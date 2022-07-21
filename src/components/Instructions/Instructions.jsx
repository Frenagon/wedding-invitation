import { CornerBorder } from "../../globalStyles";
import NavigationButton from "../NavigationButton";
import { InstructionsContainer } from "./Instructions.styles";

function Instructions() {
  return (
    <InstructionsContainer>
      <CornerBorder top left />
      <CornerBorder top right rotate="90deg" />
      <NavigationButton back />
      This will be the Instructions
      <CornerBorder bottom left rotate="-90deg" />
      <CornerBorder bottom right rotate="180deg" />
    </InstructionsContainer>
  );
}

export default Instructions;
