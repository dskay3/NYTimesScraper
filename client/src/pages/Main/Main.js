// Dependencies
import React, { Component } from "react";
import MainHeaderContainer from "../../components/MainHeaderContainer";
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
      this.state.start.replace(/-/g,""),
      this.state.end.replace(/-/g,"")
    )
      .then(results => {
        console.log(results);
        this.setState({
          articles: results,
          search: "",
          start: "",
          end: ""
        });
      });
  }

  // Function to handle save article, take off of the list
  handleSaveArticle = (article) => {
    // Removes the saved article from the array (filters out)
    let newArr = this.state.articles.docs.filter(art =>  art._id !== article._id );

    // This updated articles state needs to be passed in the SearchItem results attribute..
    this.setState({
      articles: {
        docs: newArr
      }
    });

    // Constant to store time page is saved
    const clickTime = JSON.stringify(new Date()).substring(1, 11);

    // Saves articles
    API.saveArticles(article.headline.main, article.pub_date, article.web_url, clickTime)
      .catch(error => console.log(error));
  }

  render() {
    return(
      <div>
        <MainHeaderContainer />

        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="sm-5">
              <SearchForm 
                header={ "Article Search" }
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
                handleSaveArticle={ this.handleSaveArticle.bind(this) }
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Main;