import React from "react";
import PropTypes from "prop-types";
import { Container } from "semantic-ui-react";

const SearchedContent = ({ articles = [] }) => (
  <Container>
    <ul>
      {articles.map(({ webUrl, webTitle }) => (
        <li key={webUrl}>
          <a href={webUrl}>{webTitle}</a>
        </li>
      ))}
    </ul>
  </Container>
);

SearchedContent.propTypes = {
  urls: PropTypes.array
};

export default SearchedContent;
