import React from "react";
import { StoreContext } from "redux-react-hook";
import configureStore from "./configureStore";
import Robot from "./components/Robot";

const App = () => {
  const store = configureStore();
  return (
    <StoreContext.Provider value={store}>
      <Robot />
    </StoreContext.Provider>
  );
};

export default App;
