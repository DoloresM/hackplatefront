import React, {Component} from 'react';
import styled from "styled-components"
import Footer from "./components/Footer";
import Body from "./components/Body";
import Nav from "./components/Nav";
import {Link} from "react-router-dom";
import Heading from "./components/Heading";
import './App.css';



 const App = ()=>{
  return(
    <div>
      <div class="App-header">
         <Nav/>
         <Heading/>
       </div>
     <Body id="content-body"/>
     <Footer/>
    </div>
  )
}


export default App;
