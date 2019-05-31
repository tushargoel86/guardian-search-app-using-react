import React from "react";
import PropTypes from "prop-types";

import { Form, Grid, Container } from "semantic-ui-react";

const SearchBar = ({ onChange }) => (
  <Container style={{ marginTop: 100 }}>
    <Grid columns={2}>
      <Grid.Row floated="centered">
        <Grid.Column>
          <Form onSubmit={e => e.preventDefault()}>
            <Form.Input
              label="Enter text"
              name="searchText"
              onChange={onChange}
              //  value={search}
            />
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Container>
);

SearchBar.propTypes = {
  onChange: PropTypes.func
};

export default SearchBar;
