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

  // Function to delete saved articles
  deleteSavedArticle = id =>  {
    API.deleteArticles(id)
      .then(result => {
        this.loadSavedArticles();
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <ul className="list-group">
      { this.state.articles.map(result => 
        <li key={ result._id } className="list-group-item">
          <p className="left">{ result.title }</p>
          <a href={ result.url } className="right">Source</a>
          <button onClick={ () => this.deleteSavedArticle(result._id) }>X</button>
        </li>
      )}
    </ul>
    )
  }
}

export default Saved;