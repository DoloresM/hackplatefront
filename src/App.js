import React, {Component} from 'react';
import styled from "styled-components"
import Form from "./components/Form";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Nav from "./components/Nav";
import {Link} from "react-router-dom";
import Heading from "./components/Heading";
import './App.css';
import Header from "./components/Header";


const GIFT = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(){
    super()
  }
  render(){
      return (
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
  }
export default App;
