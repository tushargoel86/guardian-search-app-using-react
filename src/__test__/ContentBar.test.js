import React from "react";
import { shallow, mount } from "enzyme";
import ContentBar from "../components/ContentBar";
import SearchBar from "../components/SearchBar";

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

jest.mock("../actions/");

describe("integeration testing", () => {
  test("render without crashing", () => {
    const wrapper = shallow(<ContentBar />);
    expect(wrapper.exists()).toBe(true);
  });

  test("should render SearchBar component", () => {
    const wrapper = shallow(<ContentBar />);
    expect(wrapper.children(SearchBar).length).toEqual(1);
  });

  test("render search results when the articles change", () => {
    const wrapper = mount(<ContentBar articles={[]} />);
    wrapper.setState({
      articles: [{ webUrl: "http://google.com", webTitle: "Google Search" }]
    });

    expect(wrapper.find("a").props().href).toEqual("http://google.com");
  });

});
