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
  state = {
    articles: [],
    search: "",
    start: "",
    end: "",
  }

  handleInputChange = event => {
    // Stores values from the form
    const { name, value } = event.target;

    // Sets the states according to the values in the form
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    // Prevents running duplicates
    event.preventDefault();

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

  // Save articles 
  // handleClick = (event) => {

  //   console.log(this.state.articles.docs);
  //   console.log(this.state.articles.docs.headline)
  // }

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
                /* handleClick={ t } */
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;
