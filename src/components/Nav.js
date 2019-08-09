import React from "react";
import {Link} from "react-router-dom";


const Nav = (props) => {
  return(
    <nav>
      <p id="logo"><Link style={{"color":"white" ,"textDecorationLine":"none"}} to="/">#HackMyPlate</Link ></p>
      <ul>
        <li className="nav-list"><Link  style={{"color":"orange", "textDecorationLine":"none", "padding": "30px"}}to="/recipes">Search Recipes</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;
