import { mount } from "enzyme";
import React from "react";
import { StoreContext } from "redux-react-hook";
import RightButton, { changeDirectionRight } from "./RightButton";
import configureStore from "../../configureStore";

let store = configureStore({});
describe("LeftButton", () => {
  it("should render without any error", () => {
    let wrapper = mount(
      <StoreContext.Provider value={store}>
        <RightButton direction={"NORTH"} />
      </StoreContext.Provider>
    );
    expect(wrapper.find("Button").length).toEqual(1);
    expect(wrapper.find("Button").text()).toEqual("MOVE RIGHT");
  });
});

describe("changeDirectionRight function", () => {
  it("should return direction east", () => {
    let newDirection = changeDirectionRight("NORTH");
    expect(newDirection).toEqual("east");
  });
  it("should return direction north", () => {
    let newDirection = changeDirectionRight("WEST");
    expect(newDirection).toEqual("north");
  });
  it("should return direction west", () => {
    let newDirection = changeDirectionRight("SOUTH");
    expect(newDirection).toEqual("west");
  });
  it("should return direction south", () => {
    let newDirection = changeDirectionRight("EAST");
    expect(newDirection).toEqual("south");
  });
});
