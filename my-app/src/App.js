import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home"
import Nav from "../src/components/Nav"
import Footer from "../src/components/footer"
import Contact from "../src/components/Contact"
import Portfolio from "../src/components/Portfolio"


function App() {
  return(
    <Router>
      <Routes>
      <div>
        <Nav />
        <Route   path="/" element={<Home/>}/>
        <Route   path="/contact" element={<Contact/>} />
        <Route   path="/portfolio" element={<Portfolio/>} />
        <Footer />
      </div>
      
        

      </Routes>
    </Router>
  );
}

export default App;
