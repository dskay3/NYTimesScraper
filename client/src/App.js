// Dependencies
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Saved from "./pages/Saved";

// App component
const App = () => 
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={ Main } />
        <Route exact path="/saved" component={ Saved } />
      </Wrapper>
      <Footer />
    </div>
  </Router>

export default App;