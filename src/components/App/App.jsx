import Homepage from "../Homepage";
import Invitation from "../Invitation";
import Instructions from "../Instructions";
import { Routes, useNavigation } from "../../context/Navigation";

function App() {
  const { route } = useNavigation();

  switch (route) {
    case Routes.HOMEPAGE:
      return <Homepage />;
    case Routes.INVITATION:
      return <Invitation />;
    case Routes.INSTRUCTIONS:
      return <Instructions />;
    default:
      throw new Error(`Route ${route} is not defined`);
  }
}

export default App;
