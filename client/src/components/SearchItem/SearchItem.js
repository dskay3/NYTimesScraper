// Dependencies
import React from "react";
import "./SearchItem.css";
import moment from "moment";

// Search Item component
const SearchItem = props =>
  <div>
    { props.results.map(result => 
      <li key={ result._id } className="collection-item">
        <div>
          <p>
            <strong>Article: </strong>
            <a 
              href={ result.web_url } 
              className="article-title"
            >
              { result.headline.main }
            </a>
          </p>

          <a 
            className="secondary-content right" 
            onClick={ props.handleClick.bind(this, result) }
          >
            <i className="fa fa-bookmark save-btn" aria-hidden="true"></i>
          </a>
        </div>

        <br />
        Date Published: { moment(result.pub_date.substring(0, 10)).format('LL') }
      </li>
    )}
  </div>;

export default SearchItem;