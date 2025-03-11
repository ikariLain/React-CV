import {HashRouter, Routes, Route} from 'react-router-dom'
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
    <HashRouter >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/cv" element={<CV />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/portfolie" element={<Portfolie />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </HashRouter>
  );
};

export default App;