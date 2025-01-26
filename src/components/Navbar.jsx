import { Link } from "react-router-dom"
import './Navbar.css'

// Skapa en grundläggande Navbar-komponent
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Din Logo
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Hem</Link>
          </li>
          <li className="nav-item">
            <Link to="/cv" className="nav-link">CV</Link>
          </li>
          {/* Testa NotFound genom att länka till en sida som inte finns */}
          <li className="nav-item">
            <Link to="/finns-inte" className="nav-link">Test 404</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 