import { CiMenuBurger } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import "./Navbar.css";

function Navbar({ role, setRole, setSidebarActive}) {
  return (
    <div className="navbar">
      {/* Left - Hamburger + Logo */}
      <div className="navbar-left">
        {/* Hamburger only for mobile */}
       

        <img src="./assets/logo.png" alt="logo" className="logo" />
      </div>

      {/* Center - Search */}
      <div className="navbar-search">
        <input type="text" placeholder="Search..." />
        <IoIosSearch className="search-icon" />
      </div>

      {/* Right - Role + User */}
      <div className="navbar-right">
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Viewer">Viewer</option>
          <option value="Admin">Admin</option>
        </select>

        <FaUser className="user-icon" />
      </div>
    </div>
  );
}

export default Navbar;
