import React from "react";
import { useDispatch } from "redux-react-hook";
import Button from "../common/Button";
import { moveLeft } from "./modules/robotPositionAction";
import { DIRECTIONS } from "../../constants";

export const changeDirection = (direction) => {
  let newDirection = direction;
  switch (direction.toLowerCase()) {
    case DIRECTIONS.north:
      newDirection = DIRECTIONS.west;
      break;
    case DIRECTIONS.east:
      newDirection = DIRECTIONS.north;
      break;
    case DIRECTIONS.south:
      newDirection = DIRECTIONS.east;
      break;
    case DIRECTIONS.west:
      newDirection = DIRECTIONS.south;
      break;
    default:
      break;
  }
  return newDirection;
};
const LeftButton = ({ direction }) => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    if (direction === "") {
      alert("Robot direction is not set");
    } else {
      let newDirection = changeDirection(direction);
      newDirection !== direction.toLowerCase() &&
        dispatch(moveLeft(newDirection));
    }
  };
  return <Button handleClick={handleButtonClick} title={"MOVE LEFT"} />;
};

export default LeftButton;
