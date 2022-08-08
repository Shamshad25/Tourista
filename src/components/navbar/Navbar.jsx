import "./navbar.css";
import Logo from "../../images/travel.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <div className="navSection">
          <img src={Logo} alt="logo" width="40px" height="40px" />
          <span className="logo">Tourista</span>
        </div>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
