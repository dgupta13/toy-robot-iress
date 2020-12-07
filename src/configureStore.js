import rootReducer from "./reducer";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

//setting store with middleware and redux dev tools viewers
export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, composeWithDevTools());
}
