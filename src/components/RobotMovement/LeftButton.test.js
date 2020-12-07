import { mount } from "enzyme";
import React from "react";
import { StoreContext } from "redux-react-hook";
import LeftButton, { changeDirection } from "./LeftButton";
import configureStore from "redux-mock-store";

const mockStore = configureStore();
let store;

describe("LeftButton", () => {
  let wrapper;
  beforeEach(() => {
    store = mockStore({ direction: "" });
    wrapper = mount(
      <StoreContext.Provider value={store}>
        <LeftButton direction={"NORTH"} />
      </StoreContext.Provider>
    );
  });
  it("should render without any error", () => {
    expect(wrapper.find("Button").length).toEqual(1);
    expect(wrapper.find("Button").text()).toEqual("MOVE LEFT");
  });
});

describe("changeDirection function", () => {
  it("should return direction west", () => {
    let newDirection = changeDirection("NORTH");
    expect(newDirection).toEqual("west");
  });
  it("should return direction south", () => {
    let newDirection = changeDirection("WEST");
    expect(newDirection).toEqual("south");
  });
  it("should return direction east", () => {
    let newDirection = changeDirection("SOUTH");
    expect(newDirection).toEqual("east");
  });
  it("should return direction north", () => {
    let newDirection = changeDirection("EAST");
    expect(newDirection).toEqual("north");
  });
});
