import React from "react";
import Button from "../common/Button";
import { useDispatch } from "redux-react-hook";
import { useState } from "react";
import { cancelForm, submitForm } from "./modules/robotPositionAction";

const PositionForm = () => {
  const dispatch = useDispatch();
  const [xposition, setxposition] = useState("");
  const [yposition, setyposition] = useState("");
  const [fdirection, setfdirection] = useState("");
  const handleCancel = () => {
    dispatch(cancelForm());
  };
  const handleSubmit = () => {
    const payload = {
      x: xposition,
      y: yposition,
      direction: fdirection,
    };
    dispatch(submitForm(payload));
  };
  const handleXChange = (event) => {
    let value = parseInt(event.target.value);
    setxposition(value);
  };

  const handleYChange = (event) => {
    let value = parseInt(event.target.value);
    setyposition(value);
  };
  const handleFChange = (event) => {
    setfdirection(event.target.value);
  };

  return (
    <div>
      <br />
      <label htmlFor="xposition">X co-ordinate:</label>
      <br />
      <input
        type="text"
        id="xposition"
        name="xposition"
        value={xposition}
        onChange={handleXChange}
      />
      <br />
      <label htmlFor="yposition">Y co-ordinate:</label>
      <br />
      <input
        type="text"
        id="yposition"
        name="yposition"
        value={yposition}
        onChange={handleYChange}
      />
      <br />
      <label htmlFor="fposition">Face direction</label>
      <br />
      <input
        type="text"
        id="fposition"
        name="fposition"
        value={fdirection}
        onChange={handleFChange}
      />
      <br />
      <br />
      <div>
        <Button handleClick={handleCancel} title={"Cancel"} />
        <Button handleClick={handleSubmit} title={"Submit"} />
      </div>
    </div>
  );
};

export default PositionForm;
