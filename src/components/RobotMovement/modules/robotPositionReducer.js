const initialState = {
  renderRobot: false,
  renderRobotForm: false,
  xposition: "",
  yposition: "",
  direction: "",
};
export const robotPositionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PLACE_ROBOT":
      return {
        ...state,
        renderRobotForm: true,
      };
    case "MOVE_ROBOT":
      return {
        ...state,
        xposition: action.payload.x,
        yposition: action.payload.y,
      };
    case "MOVE_RIGHT":
      return {
        ...state,
        direction: action.payload,
      };
    case "MOVE_LEFT":
      return {
        ...state,
        direction: action.payload,
      };
    case "CANCEL_FORM":
      return {
        ...state,
        renderRobotForm: false,
      };
    case "SUBMIT_FORM":
      return {
        ...state,
        xposition: action.payload.x,
        yposition: action.payload.y,
        direction: action.payload.direction,
        renderRobotForm: false,
      };
    default:
      return state;
  }
};
