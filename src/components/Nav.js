import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";


export default function Nav(props){
  return(
    <NavWrapper>
      <p id="logo"><Link style={{"color":"white" ,"textDecorationLine":"none"}} to="/">#HackMyPlate</Link ></p>
      <ul>
        <li className="nav-list"><Link  style={{"color":"orange", "textDecorationLine":"none", "padding": "30px"}}to="/search">Search Recipes</Link></li>
        <li className="nav-list"><Link  style={{"color":"orange", "textDecorationLine":"none", "padding": "30px"}}to="/guide">Guide</Link></li>
        <li className="nav-list"><Link  style={{"color":"orange", "textDecorationLine":"none", "padding": "30px"}}to="/blog">Blog</Link></li>
        <li className="nav-list"><Link  style={{"color":"orange", "textDecorationLine":"none", "padding": "30px"}}to="/purchase">Purchase</Link></li>
      </ul>
    </NavWrapper>
  )
}



const NavWrapper = styled.nav`
position: fixed;
top:0px;
width:100%;
background:transparent;
height: 10vh;
padding: 1% 4%;
`
