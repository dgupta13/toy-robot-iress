import React from "react";
import { useDispatch } from "redux-react-hook";
import Button from "../common/Button";
import { moveRobot } from "./modules/robotPositionAction";
import { DIRECTIONS, TABLE_DIMENSION } from "../../constants";

export const changePosition = (xposition, yposition, direction) => {
  let intXpos = parseInt(xposition);
  let intYpos = parseInt(yposition);
  let newPosition = {
    x: xposition,
    y: yposition,
  };
  switch (direction.toLowerCase()) {
    case DIRECTIONS.north:
      newPosition.y =
        intYpos + 1 < TABLE_DIMENSION.columns ? intYpos + 1 : yposition;
      break;
    case DIRECTIONS.south:
      newPosition.y = intYpos - 1 >= 0 ? intYpos - 1 : yposition;
      break;
    case DIRECTIONS.east:
      newPosition.x =
        intXpos + 1 < TABLE_DIMENSION.rows ? intXpos + 1 : xposition;
      break;
    case DIRECTIONS.west:
      newPosition.x = intXpos - 1 >= 0 ? intXpos - 1 : xposition;
      break;
    default:
      break;
  }
  return newPosition;
};

const MoveButton = ({ xposition, yposition, direction }) => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    if (xposition === "" || yposition === "") {
      alert("Please place the robot on the table");
    } else {
      let newPosition = changePosition(xposition, yposition, direction);
      if (
        (newPosition.x === xposition &&
          (direction.toLowerCase() === DIRECTIONS.west ||
            direction.toLowerCase() === DIRECTIONS.east)) ||
        (newPosition.y === yposition &&
          (direction.toLowerCase() === DIRECTIONS.north ||
            direction.toLowerCase() === DIRECTIONS.south))
      ) {
        alert(
          "Robot is at the end of the table, please select another movement"
        );
      } else {
        dispatch(moveRobot(newPosition));
      }
    }
  };
  return <Button handleClick={handleButtonClick} title={"MOVE"} />;
};

export default MoveButton;
