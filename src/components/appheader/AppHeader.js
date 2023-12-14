import React,{useState} from "react";
import { Link, NavLink } from "react-router-dom";
import "./AppHeader.css"

function AppHeader() {
  const [menuOpen, setMenuOpen] = useState()

  function setMenu(){
    setMenuOpen(!menuOpen)
  }

  return (
    <nav>
        <Link to="/" className="title">P.A.R.S</Link>
        <div className="menu" onClick={setMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          {/* //navlink is a react-dom inbuilt tag for highlighting selected tags */}
          <NavLink to="/about"> About </NavLink>
        </li>

        <li>
          <NavLink to="/calendar"> Calendar </NavLink>
        </li>

        <li>
          <NavLink to="/contact"> Contact </NavLink>
        </li>
      </ul>
    </nav>
  );
}


export default AppHeader