import React from "react";
import { useDispatch } from "redux-react-hook";
import { placeRobot } from "./modules/robotPositionAction";
import Button from "../common/Button";

const PlaceButton = () => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(placeRobot());
  };
  return <Button handleClick={handleButtonClick} title={"PLACE"} />;
};

export default PlaceButton;
