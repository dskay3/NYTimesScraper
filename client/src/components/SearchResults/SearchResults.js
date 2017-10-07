// Dependencies
import React from "react";
import "./SearchResults.css";

// Search Results component
const SearchResults = props => {
  console.log(props.results);

  // ISSUE: on the initial load, props.results is undefined. I want to make it so that when it is undefined, it will return the first conditional. If not, return the else.

  if (typeof(props.results) == 'undefined'){
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
          <li className="list-group-item">
            { result.headline.main }
          </li>
        )}
      </ul>
    )
  }
}

export default SearchResults;