// Dependencies
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Main from "./pages/Main";

// App component
const App = () => 
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={ Main } />
        {/* <Route exact path="/articles" component={} />
        <Route exact path="/article/:id" component={} /> */}
      </Wrapper>
      <Footer />
    </div>
  </Router>

export default App;