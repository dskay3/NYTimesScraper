// Dependencies
import React, { Component } from "react";
import SearchItem from "../SearchItem";

// Search Results component
class SearchResults extends Component {
  
  state = {
    results: this.props.results
  };

  componentWillReceiveProps(newProps) {
    this.setState({
      results: newProps.results
    });
  }

  render() {
    if (this.state.results.length === 0) {
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
            results={ this.state.results.docs ? this.state.results.docs : [] } 
            handleSaveArticle={ this.props.handleSaveArticle }
          >
          </SearchItem>
  
        </ul>
      )
    }
  }
}

export default SearchResults;