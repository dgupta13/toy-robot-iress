import React from "react";
import { useDispatch } from "redux-react-hook";
import Button from "../common/Button";
import { moveRight } from "./modules/robotPositionAction";
import { DIRECTIONS } from "../../constants";

export const changeDirectionRight = (direction) => {
  let newDirection = direction;
  switch (direction.toLowerCase()) {
    case DIRECTIONS.north:
      newDirection = DIRECTIONS.east;
      break;
    case DIRECTIONS.east:
      newDirection = DIRECTIONS.south;
      break;
    case DIRECTIONS.south:
      newDirection = DIRECTIONS.west;
      break;
    case DIRECTIONS.west:
      newDirection = DIRECTIONS.north;
      break;
    default:
      break;
  }
  return newDirection;
};
const RightButton = ({ direction }) => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    if (direction === "") {
      alert("Robot direction is not set");
    } else {
      let newDirection = changeDirectionRight(direction);
      newDirection !== direction.toLowerCase() &&
        dispatch(moveRight(newDirection));
    }
  };
  return <Button handleClick={handleButtonClick} title={"MOVE RIGHT"} />;
};

export default RightButton;
