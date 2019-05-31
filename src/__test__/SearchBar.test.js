import React from "react";
import { shallow } from "enzyme";
import SearchBar from "../components/SearchBar";

describe("Search Component", () => {
  test("render without crashing", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.exists()).toBe(true);
  });

  test("input on change click", () => {
    let mockHandleChange = jest.fn();
    const wrapper = shallow(<SearchBar onChange={mockHandleChange} />);
    wrapper
      .find("FormInput")
      .getElement()
      .props.onChange();

    expect(mockHandleChange).toBeCalled();
  });

  test("when the form is submitted the event is cancelled", () => {
    let mockHandleChange = jest.fn();
    const wrapper = shallow(<SearchBar onChange={mockHandleChange} />);
    let prevented = false;
    wrapper.find("Form").simulate("submit", {
      preventDefault: () => (prevented = true)
    });
    expect(prevented).toBe(true);
  });
});
