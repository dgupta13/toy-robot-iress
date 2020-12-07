import PlaceButton from "./PlaceButton";
import MoveButton from "./MoveButton";
import RightButton from "./RightButton";
import LeftButton from "./LeftButton";
import { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import PositionForm from "./PositionForm";
import ReportButton from "./ReportButton";

const RobotMovement = () => {
  const mapState = useCallback(
    (state) => ({
      renderFlag: state.robotPosition.renderRobotForm,
      xposition: state.robotPosition.xposition,
      yposition: state.robotPosition.yposition,
      direction: state.robotPosition.direction,
    }),
    []
  );
  const { renderFlag, xposition, yposition, direction } = useMappedState(
    mapState
  );
  return (
    <div>
      {renderFlag ? (
        <PositionForm />
      ) : (
        <>
          <PlaceButton />
          <MoveButton
            xposition={xposition}
            yposition={yposition}
            direction={direction}
          />
          <RightButton direction={direction} />
          <LeftButton direction={direction} />
          <ReportButton
            xposition={xposition}
            yposition={yposition}
            direction={direction}
          />
        </>
      )}
    </div>
  );
};
export default RobotMovement;
