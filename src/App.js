import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/Navbar';
import Footer from './components/footer'; 
import Home from './pages/home';
import Projects from './pages/projects';
import ContactForm from './pages/contact';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
