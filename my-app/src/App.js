import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header'
import Footer from './components/footer'
import "./App.css";

function App() {
    return (
          <Router>
            <>
            <Header/>
            <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/portfolio" element={ <Portfolio />}/>
            <Route path="/contact" element={ <Contact />} />
            <Route path="/resume" element={<Resume /> }/>
            </Routes>
            <Footer/>
            </>
      
      </Router>
    );
}

export default App;
