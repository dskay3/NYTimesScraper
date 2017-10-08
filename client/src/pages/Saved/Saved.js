// Dependencies
import React, { Component } from "react";
import API from "../../util/API";

class Saved extends Component {
  // Initial states
  state = {
    articles: []
  }

  // Load during initial load
  componentDidMount() {
    this.loadSavedArticles();
    console.log('hi')
  };

  // Function to load saved articles
  loadSavedArticles = () => {
    API.getSavedArticles()
      .then(result => {
        console.log(result);

        this.setState({
          articles: result.data
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <ul className="list-group">
      { this.state.articles.map(result => 
        <li key={ result._id } className="list-group-item">
          <p className="left">{ result.title }</p>
          <a href={ result.url } className="right">Source</a>
        </li>
      )}
    </ul>
    )
  }
}

export default Saved;