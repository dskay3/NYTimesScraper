// Dependencies
import React, { Component } from "react";
import API from "../../util/API";
import Container from "../../components/Container";
import SavedHeaderContainer from "../../components/SavedHeaderContainer";
import "./Saved.css";
import moment from "moment";

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
      <div>
        <SavedHeaderContainer />

        <Container>
          {/* <h4>List of Saved Articles</h4> */}

          <ul className="collection with-header">
            <li className="collection-header">
              <h4>List of Saved Articles</h4>
              <br />
              <p><strong><ins>Instructions:</ins></strong></p>
              <p>Click Article to view source.</p>
              <p>Click <i className="fa fa-trash" aria-hidden="true"></i> to remove from list.</p>
            </li>

            { this.state.articles.map(result => 
              <li key={ result._id } className="collection-item">
                <div>
                  <p className="">
                    <strong>Article: </strong>
                    <a className="article-title" href={ result.url }> { result.title }</a>
                  </p>

                  <a className="secondary-content right" onClick={ () => this.deleteSavedArticle(result._id) }>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </a>
                </div>

                <br />
                Date Published: { moment(result.date.substring(0, 10)).add(1, 'year').format('LL') }
              </li>
            )}
          </ul>
        </Container>
      </div>
    )
  }
}

export default Saved;