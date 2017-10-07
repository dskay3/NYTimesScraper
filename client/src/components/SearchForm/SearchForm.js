// Import dependencies
import React, { Component } from "react";
import "./SearchForm.css";

class SearchForm extends Component {
  state = {
    topic: "",
    startDate: "",
    endDate: ""
  }

  handleInputChange = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();

    this.props.updateSearch(this.state.topic, this.state.startDate, this.state.endDate);

    return false;
  };

  render() {
    return(
      <form className="search">
        <label htmlFor="topic">Topic</label>
        <input
          value={ this.state.topic }
          onChange={ this.handleInputChange }
          name="topic"
          type="text"
          placeholder="Enter in topic"
          id="topic"
          required
        />
    
        <label htmlFor="startDate">Start Date</label>
        <input
          value={ this.state.startDate }
          onChange={ this.handleInputChange }
          name="startDate"
          id="startDate"
          placeholder="Enter Start Date"
          required
        />
    
        <label htmlFor="endDate">End Date</label>
        <input
          value={ this.state.endDate }
          onChange={ this.handleInputChange }
          name="endDate"
          id="endDate"
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
