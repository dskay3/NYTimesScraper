// Dependencies
import React from "react";
import HeaderContainer from "../../components/HeaderContainer";
import Container from "../../components/Container";
import Row from "../../components/Row";
import Col from "../../components/Col";
import SearchForm from "../../components/SearchForm";
// import SearchResults from "../components/SearchResults";

// Main component
const Main = () =>
  <div>
    <HeaderContainer />

    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="sm-5">
          <SearchForm />
        </Col>

        <Col size="sm-7">
          {/* <SearchResults>
          
          </SearchResults> */}
        </Col>
      </Row>
    </Container>
  </div>;

export default Main;
