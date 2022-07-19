import Homepage from "../Homepage";
import Invitation from "../Invitation";
import Instructions from "../Instructions";
import { Routes, useNavigation } from "../../context/Navigation";

function App() {
  const { route, setRoute } = useNavigation();

  const NavBar = Object.keys(Routes).map((route, index) => {
    return (
      <button key={route} onClick={() => setRoute(Routes[route])}>
        {route}
      </button>
    );
  });

  let routeComponent;
  switch (route) {
    case Routes.HOMEPAGE:
      routeComponent = <Homepage />;
      break;
    case Routes.INVITATION:
      routeComponent = <Invitation />;
      break;
    case Routes.INSTRUCTIONS:
      routeComponent = <Instructions />;
      break;
    default:
      throw new Error(`Route ${route} is not defined`);
  }

  return (
    <>
      <div>{NavBar}</div>
      <div>{routeComponent}</div>
    </>
  );
}

export default App;
