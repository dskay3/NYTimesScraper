// Import Dependencies
import React from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import SearchForm from "../../components/SearchForm";
// import SearchResults from "../components/SearchResults";

const Main = () =>
  <div>
    <Header backgroundImage="https://i.imgur.com/hIxiSKK.jpg">
      <h1>NY Times Article Scraper</h1>
      <p>Articles that are directly scraped from NY Times</p>
    </Header>

    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="sm-4">
          <SearchForm>
          
          </SearchForm>
        </Col>

        <Col size="sm-8">
          {/* <SearchResults>
          
          </SearchResults> */}
        </Col>
      </Row>
    </Container>
  </div>;

export default Main;
