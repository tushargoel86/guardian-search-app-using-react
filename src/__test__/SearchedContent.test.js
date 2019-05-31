import React from "react";
import { shallow, mount } from "enzyme";
import SearchedContent from "../components/SearchedContent";

const mockArticles = [{ webUrl: "www.yahoo.com", webTitle: "Yahoo" }];

describe("Searched Content Component", () => {
  test("renders", () => {
    const wrapper = shallow(<SearchedContent urls={mockArticles} />);
    expect(wrapper.exists()).toBe(true);
  });

  test("doesn't break without articles", () => {
    const wrapper = shallow(<SearchedContent />);
    expect(wrapper.find("li")).toHaveLength(0);
  });

  test("doesn't break with empty array", () => {
    const wrapper = shallow(<SearchedContent articles={[]} />);
    expect(wrapper.find("li")).toHaveLength(0);
  });

  test("show one article", () => {
    const wrapper = shallow(<SearchedContent articles={mockArticles} />);
    expect(wrapper.find("li")).toHaveLength(1);
  });

  test("render search results when the articles change", () => {
    const wrapper = mount(<SearchedContent articles={[]} />);

    wrapper.setProps({
      articles: [{ webUrl: "http://google.com", webTitle: "Google Search" }]
    });

    expect(wrapper.find("a").props().href).toEqual("http://google.com");
  });
});
