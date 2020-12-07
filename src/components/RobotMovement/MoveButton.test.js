import { mount } from "enzyme";
import React from "react";
import { StoreContext } from "redux-react-hook";
import MoveButton, { changePosition } from "./MoveButton";
import configureStore from "../../configureStore";

let store = configureStore({});
describe("MoveButton", () => {
  it("should render without any error", () => {
    let wrapper = mount(
      <StoreContext.Provider value={store}>
        <MoveButton xposition={"0"} yposition={"0"} direction={"NORTH"} />
      </StoreContext.Provider>
    );
    expect(wrapper.find("Button").length).toEqual(1);
    expect(wrapper.find("Button").text()).toEqual("MOVE");
  });
});

describe("changePosition function", () => {
  it("should move one step ahead in north direction", () => {
    let newDirection = changePosition(1, 1, "NORTH");
    expect(newDirection.x).toEqual(1);
    expect(newDirection.y).toEqual(2);
  });
  it("should move one step ahead in south direction", () => {
    let newDirection = changePosition(2, 2, "SOUTH");
    expect(newDirection.x).toEqual(2);
    expect(newDirection.y).toEqual(1);
  });
  it("should move one step ahead in east direction", () => {
    let newDirection = changePosition(3, 2, "EAST");
    expect(newDirection.x).toEqual(4);
    expect(newDirection.y).toEqual(2);
  });
  it("should not change position if its the edge of the table", () => {
    let newDirection = changePosition(0, 4, "NORTH");
    expect(newDirection.x).toEqual(0);
    expect(newDirection.y).toEqual(4);
  });
  it("should move one step ahead in west direction", () => {
    let newDirection = changePosition(2, 2, "WEST");
    expect(newDirection.x).toEqual(1);
    expect(newDirection.y).toEqual(2);
  });
});
