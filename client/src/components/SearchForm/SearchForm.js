// Import dependencies
import React, { Component } from "react";
import "./SearchForm.css";
import API from "../../util/API";

class SearchForm extends Component {
  state = {
    search: "",
    start: "",
    end: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    // Prevent running duplicates
    event.preventDefault();

    // if(this.state.topic && this.state.startDate && this.state.endDate) {
      API.getArticles(
        this.state.search,
        this.state.start,
        this.state.end
      )
        .then(results => console.log(results))
    // }
  };

  render() {
    return(
      <form className="search">
        <label htmlFor="topic">Topic</label>
        <input
          value={ this.state.search }
          onChange={ this.handleInputChange }
          name="search"
          type="text"
          placeholder="Enter in topic"
          id="search"
          required
        />
    
        <label htmlFor="startDate">Start Date</label>
        <input
          value={ this.state.start }
          onChange={ this.handleInputChange }
          name="start"
          id="start"
          placeholder="Enter Start Date"
          required
        />
    
        <label htmlFor="endDate">End Date</label>
        <input
          value={ this.state.end }
          onChange={ this.handleInputChange }
          name="end"
          id="end"
          placeholder="Enter End Date"
          required
        />
    
        <button
          type="submit"
          onClick={ this.handleFormSubmit }
          className="btn waves-effect waves-light submit-btn"
        >
          Search
          <i className="material-icons right">send</i>
        </button>
      </form>
    )
  }
}

export default SearchForm;
