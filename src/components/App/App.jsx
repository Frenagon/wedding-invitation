import Homepage from "../Homepage";
import Invitation from "../Invitation";
import Instructions from "../Instructions";
import { Routes, useNavigation } from "../../context/Navigation";

function App() {
  const { route } = useNavigation();

  return (
    <>
      <Instructions closed={route > Routes.INSTRUCTIONS} />
      <Invitation closed={route > Routes.INVITATION} />
      <Homepage closed={route > Routes.HOMEPAGE} />
    </>
  );
}

export default App;
