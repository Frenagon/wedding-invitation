import NavigationButton from "../NavigationButton";
import { HomepageContainer, Logo } from "./Homepage.styles";
import LogoImage from "../../resources/images/logo.png";
import { CornerBorder } from "../../globalStyles";

function Homepage() {
  return (
    <HomepageContainer>
      <CornerBorder top left />
      <CornerBorder top right rotate="90deg" />
      <Logo src={LogoImage} alt="Logo" />
      <NavigationButton />
      <CornerBorder bottom left rotate="-90deg" />
      <CornerBorder bottom right rotate="180deg" />
    </HomepageContainer>
  );
}

export default Homepage;
