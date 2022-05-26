import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navbar';
import Footer from './components/footer'; 
import Home from './pages/home';
import Portfolio from './pages/portfolio';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
