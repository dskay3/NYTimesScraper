// Dependencies
import React from "react";
import "./SearchResults.css";

// Search Results component
const SearchResults = props => {
  if (typeof props.results.docs === "undefined") {
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
        { props.results.docs.map(result => 
          <li key={ result._id } className="list-group-item">
            <p className="left">{ result.headline.main }</p>
            <a href={ result.web_url } className="right">Source</a>
          </li>
        )}
      </ul>
    );
  };
};

export default SearchResults;