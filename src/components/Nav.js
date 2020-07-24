import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";


const Nav = ()=>{
  return(
    <NavWrapper>
      <p id="logo"><Link style={{"color":"white" ,"textDecorationLine":"none"}} to="/"><span>#HackMyPlate</span></Link ></p>
      <ul>
        <li className="nav-list"><Link  style={{"color":"orange", "textDecorationLine":"none", "padding": "30px"}}to="/search">Search Recipes</Link></li>
        <li className="nav-list"><Link  style={{"color":"orange", "textDecorationLine":"none", "padding": "30px"}}to="/guide">Guide</Link></li>
        <li className="nav-list"><Link  style={{"color":"orange", "textDecorationLine":"none", "padding": "30px"}}to="/blog">Blog</Link></li>
        <li className="nav-list"><Link  style={{"color":"orange", "textDecorationLine":"none", "padding": "30px"}}to="/purchase">Purchase</Link></li>
      </ul>
    </NavWrapper>
  )
}
export default Nav;



const NavWrapper = styled.nav`
width:100%;
height: 10vh;
padding: 1% 4%;
`
