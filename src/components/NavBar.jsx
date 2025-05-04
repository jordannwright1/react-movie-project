import { Link } from "react-router-dom";
import "../css/Navbar.css"
import { useNavigate } from "react-router-dom";

function NavBar() {
  
  return <nav className="navbar">
    <div className="navbar-brand">
      <Link to='/'>Movie App</Link>
    </div>
    <div className="navbar-links">
    <a href="/" className="nav-link">Home</a>
    <Link to='/favorites' className="nav-link">Favorites</Link>
    </div>
  </nav>
}


export default NavBar
