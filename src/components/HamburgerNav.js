function HamburgerNav() {
  const toggleMenu = () => {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  };
  return (
    <nav id="hamburger-nav">
      <div className="logo">Andrew Velasquez</div>
      <div className="hamburger-menu">
        <div className="hamburger-icon" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="menu-links">
          <li>
            <a href="./About" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li>
            <a href="./Experience" onClick={toggleMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="./Projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="./Contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}

export default HamburgerNav;
