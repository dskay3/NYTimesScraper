// Dependencies
import React, { Component } from "react";
import "./SearchResults.css";
import API from "../../util/API";
import moment from "moment";

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
        <ul className="collection with-header">
          <li className="collection-header">
            <h4>List of Searched Articles</h4>
            <br />
            <p><strong><ins>Instructions:</ins></strong></p>
            <p>Click Article to view source.</p>
            <p>Click <i className="fa fa-bookmark" aria-hidden="true"></i> to add to Saved list.</p>
          </li>


          { this.props.results.docs.map(result => 
            <li key={ result._id } className="collection-item">
              <div>
                <p>
                  <strong>Article: </strong>
                  <a href={ result.web_url } className="article-title">{ result.headline.main }</a>
                </p>

                <a className="secondary-content right" onClick={ this.handleClick.bind(this, result) }>
                  <i className="fa fa-bookmark save-btn" aria-hidden="true"></i>
                </a>
              </div>

              <br />
              Date Published: { moment(result.pub_date.substring(0, 10)).add(1, 'year').format('LL') }
            </li>
          )}
        </ul>
      );
    };
  }
}

export default SearchResults;