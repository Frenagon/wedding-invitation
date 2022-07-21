import WeddingLayout from "../WeddingLayout";
import NavigationButton from "../NavigationButton";
import { Logo } from "./Homepage.styles";
import LogoImage from "../../resources/images/logo.png";

function Homepage({ closed }) {
  return (
    <WeddingLayout closed={closed}>
      <Logo src={LogoImage} alt="Logo" />
      <NavigationButton />
    </WeddingLayout>
  );
}

export default Homepage;
