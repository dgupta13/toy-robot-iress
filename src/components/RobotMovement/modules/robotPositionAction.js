export const placeRobot = () => {
  return { type: "PLACE_ROBOT", payload: null };
};

export const moveRobot = (position) => {
  return { type: "MOVE_ROBOT", payload: position };
};

export const moveRight = (position) => {
  return { type: "MOVE_RIGHT", payload: position };
};

export const moveLeft = (position) => {
  return { type: "MOVE_LEFT", payload: position };
};

export const cancelForm = () => {
  return { type: "CANCEL_FORM", payload: null };
};

export const submitForm = (payload) => {
  return { type: "SUBMIT_FORM", payload: payload };
};
