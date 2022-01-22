import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home"
import Nav from "../src/components/Nav"
import Footer from "../src/components/footer"
import Contact from "../src/components/Contact"
import Portfolio from "../src/components/Portfolio"


function App() {
  return(<>


<Nav />
    <Router>
      <Routes>
      
        
        <Route   path="/" element={<Home/>}/>
        <Route   path="/contact" element={<Contact/>} />
        <Route   path="/portfolio" element={<Portfolio/>} />
        <Footer />
      
      
        

      </Routes>
    </Router>

    </>
  );
}

export default App;
