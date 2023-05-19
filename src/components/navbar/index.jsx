import Search from "../search";
import React from "react";
import "./style.css";
import SearchIcon from "@mui/icons-material/Search";
function Navbar() {
  return (
    <nav className="nav-cont">
      <a className="brand-cont">
        <img className="brand-logo" src="/icons/brand.png" />
        PROCESS
      </a>
      <div className="search-cont">
        <div>
          <Search />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
