import * as React from "react";

const Routes = Object.freeze({
  HOMEPAGE: Symbol("HOMEPAGE"),
  INVITATION: Symbol("INVITATION"),
  INSTRUCTIONS: Symbol("INSTRUCTIONS"),
});

const NavigationContext = React.createContext();

function NavigationProvider({ children }) {
  const [route, setRoute] = React.useState(Routes.HOMEPAGE);

  const value = { route, setRoute };
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
