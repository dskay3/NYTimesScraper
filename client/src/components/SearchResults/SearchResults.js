// Dependencies
import React, { Component } from "react";
import API from "../../util/API";
import SearchItem from "../SearchItem";

// Search Results component
class SearchResults extends Component {
  state = {
    title: "",
    url: "",
    pub_date: "",
  }

  // Function to handle click
  handleClick = (article, event) => {
    console.log(article);
    console.log(`Raw Time: ${new Date()}`);

    // Constant to store time page is saved
    const clickTime = JSON.stringify(new Date()).substring(1, 11);

    // Saves articles
    API.saveArticles(article.headline.main, article.pub_date, article.web_url, clickTime)
      .catch(error => console.log(error));
  }


  render() {
    if (typeof this.props.results.docs === "undefined") {
      return(
        <li className="list-group-item">
          <h3 className="text-center">
            Please search in order for articles to be displayed.
          </h3>
        </li>
      );
    }
  
    else {
      return(
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>List of Searched Articles</h4>
            <br />
            <p><strong><ins>Instructions:</ins></strong></p>
            <p>Click Article to view source.</p>
            <p>Click <i className="fa fa-bookmark" aria-hidden="true"></i> to add to Saved list.</p>
          </li>

          <SearchItem
            results={ this.props.results.docs }
            handleClick={ this.handleClick }
          >
          </SearchItem>

        </ul>
      )
    }
  }
}

export default SearchResults;