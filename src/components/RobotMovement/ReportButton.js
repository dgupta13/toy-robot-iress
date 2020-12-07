import React from "react";
import Button from "../common/Button";

const ReportButton = ({ xposition, yposition, direction }) => {
  const handleButtonClick = () => {
    if (xposition === "" || yposition === "" || direction === "") {
      alert("Robot position is not set");
    } else {
      alert(
        "Position is " +
          xposition +
          " " +
          yposition +
          " " +
          direction.toUpperCase()
      );
    }
  };
  return <Button handleClick={handleButtonClick} title={"REPORT"} />;
};

export default ReportButton;
