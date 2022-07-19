import { useNavigation } from "../../context/Navigation";
import {
  NavigationButtonImage,
  NavigationButtonStyled,
} from "./NavigationButton.styles";
import NavigationButtonImgSrc from "../../resources/images/navigation-button.png";

function NavigationButton({ back = false }) {
  const { goBack, goNext } = useNavigation();

  return (
    <NavigationButtonStyled back={back} onClick={back ? goBack : goNext}>
      <NavigationButtonImage
        back={back}
        src={NavigationButtonImgSrc}
        alt={back ? "Back Button" : "Next Button"}
      />
    </NavigationButtonStyled>
  );
}

export default NavigationButton;
