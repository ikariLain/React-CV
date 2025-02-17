import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Portfolie from './components/portfolie'
import NotFound from './components/NotFound'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'  
import Home from './components/Home'
import "./styles.css"
import CV from "./components/CV";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ändrat från Home till Portfolie */}
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;