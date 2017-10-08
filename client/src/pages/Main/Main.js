// Dependencies
import React, { Component } from "react";
import HeaderContainer from "../../components/HeaderContainer";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import API from "../../util/API";

// Main component
class Main extends Component {
  // Initial states
  state = {
    articles: [],
    search: "",
    start: "",
    end: "",
  }

  // Function to handle input changes to inputs
  handleInputChange = event => {
    // Stores values from the form
    const { name, value } = event.target;

    // Sets the states according to the values in the form
    this.setState({
      [name]: value
    });
  }

  // Function to handle when form is submitted
  handleFormSubmit = event => {
    // Prevents running duplicates
    event.preventDefault();

    // Gets articles from NY Times API
    API.getArticles(
      this.state.search,
      this.state.start,
      this.state.end
    )
      .then(results => {
        console.log(results);

        this.setState({
          articles: results,
          search: "",
          start: "",
          end: ""
        })
      });
  }

  render() {
    return(
      <div>
        <HeaderContainer />

        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="sm-5">
              <SearchForm 
                handleFormSubmit={ this.handleFormSubmit }
                handleInputChange={ this.handleInputChange }
                end={ this.state.end }
                start={ this.state.start }
                search={ this.state.search }
              />
            </Col>

            <Col size="sm-7">
              <SearchResults
                results={ this.state.articles }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
