import { combineReducers } from "redux";
import { robotPositionReducer } from "../components/RobotMovement/modules/robotPositionReducer";

const rootReducer = combineReducers({
  robotPosition: robotPositionReducer,
});

export default rootReducer;
