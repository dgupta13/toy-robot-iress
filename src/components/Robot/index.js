import React from "react";
import robot_img from "../../images/robot.svg";
import { StyledImgDiv } from "./Robot.style";
import { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import { TABLE_DIMENSION } from "../../constants";
import Table from "../Table";
import RobotMovement from "../RobotMovement";

const Robot = () => {
  const mapState = useCallback(
    (state) => ({
      xposition: state.robotPosition.xposition,
      yposition: state.robotPosition.yposition,
    }),
    []
  );
  const { xposition, yposition } = useMappedState(mapState);
  let newYPosition = yposition ? 260 - 60 * parseInt(yposition) : 260;
  let newXPosition = xposition ? 20 + 60 * parseInt(xposition) : 20;
  return (
    <>
      <Table rows={TABLE_DIMENSION.rows} columns={TABLE_DIMENSION.columns} />
      {xposition !== "" && yposition !== "" && (
        <StyledImgDiv
          xposition={newXPosition + "px"}
          yposition={newYPosition + "px"}
        >
          <img src={robot_img} alt={"No img found"} />
        </StyledImgDiv>
      )}
      <RobotMovement />
    </>
  );
};

export default Robot;
