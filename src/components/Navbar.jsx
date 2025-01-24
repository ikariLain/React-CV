import './Navbar.css'

// Skapa en grundläggande Navbar-komponent
const Navbar = () => {
  return (
    <nav>
    <ul class="submenu" id="submenu">
        <a href="index.html" class="submenu-item">Startsida</a>
        <a href="./Pages/About.html" class="submenu-item">About me</a>
        <a href="./Pages/Projects.html" class="submenu-item">Projects</a>
        <a href="./Pages/Contact.html" class="submenu-item">Contact</a>
    </ul>
</nav>
  );
};

export default Navbar; 