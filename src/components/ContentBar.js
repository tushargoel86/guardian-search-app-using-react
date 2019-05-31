import React from "react";
import SearchBar from "./SearchBar";
import SearchedContent from "./SearchedContent";
import { FETCH_ARTICLES } from "../actions/index";
import HOC from "./HOC";

class ContentBar extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      articles: []
    };
  }

  handleChange(e) {
    e.preventDefault();
    const searchValue = e.target.value;
    if (searchValue === "") this.setState({ urls: [] });
    else this.performSearch(searchValue);
  }

  performSearch(searchValue) {
    FETCH_ARTICLES(searchValue)
      .then(data => {
        this.setState({
          search: searchValue,
          articles: data.response.results
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <HOC>
        <SearchBar onChange={this.handleChange.bind(this)} />
        <SearchedContent articles={this.state.articles} />
      </HOC>
    );
  }
}

export default ContentBar;
