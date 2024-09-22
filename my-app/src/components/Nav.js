import "./styles/nav.css";

function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        <h2>Sebastian</h2>
        <p> Web developer</p>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
