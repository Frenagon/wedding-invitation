import * as React from "react";

const Routes = Object.freeze({
  HOMEPAGE: 1,
  INVITATION: 2,
  INSTRUCTIONS: 3,
});

const NavigationContext = React.createContext();

function NavigationProvider({ children }) {
  const [route, setRoute] = React.useState(Routes.HOMEPAGE);

  const goBack = React.useCallback(() => {
    const routeValues = Object.values(Routes);
    const currentRouteIndex = routeValues.indexOf(route);
    setRoute(
      routeValues[
        currentRouteIndex === 0 ? routeValues.length - 1 : currentRouteIndex - 1
      ]
    );
  }, [route, setRoute]);

  const goNext = React.useCallback(() => {
    const routeValues = Object.values(Routes);
    const currentRouteIndex = routeValues.indexOf(route);
    setRoute(
      routeValues[
        currentRouteIndex === routeValues.length - 1 ? 0 : currentRouteIndex + 1
      ]
    );
  }, [route, setRoute]);

  const routeValues = Object.values(Routes);
  const isFirstRoute = routeValues.indexOf(route) === 0;
  const isLastRoute = routeValues.indexOf(route) === routeValues.length - 1;

  const value = { route, setRoute, goBack, goNext, isFirstRoute, isLastRoute };
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

function useNavigation() {
  const context = React.useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}

export { Routes, NavigationProvider, useNavigation };
