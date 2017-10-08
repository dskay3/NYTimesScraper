// Dependencies
import React, { Component } from "react";
import "./SearchResults.css";
import API from "../../util/API";

// Search Results component
class SearchResults extends Component {
  state = {
    title: "",
    url: "",
    pub_date: ""
  }

  handleClick = (article, event) => {
    console.log(article);

    API.saveArticles(article.headline.main, article.pub_date, article.web_url)
      .catch(error => console.log(error));
  }

  render() {
    if (typeof this.props.results.docs === "undefined") {
      return(
        <li className="list-group-item">
          <h3>
            Please search in order for articles to be displayed.
          </h3>
        </li>
      );
    }
  
    else {
      return(
        <ul className="list-group">
          { this.props.results.docs.map(result => 
            <li key={ result._id } className="list-group-item">
              <p className="left">{ result.headline.main }</p>
              <a href={ result.web_url } className="right">Source</a>
              <button className="btn btn-success right" onClick={ this.handleClick.bind(this, result) }>Save</button>
            </li>
          )}
        </ul>
      );
    };
  }
}

export default SearchResults;