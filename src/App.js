import React, {Component} from 'react';
import Form from "./components/Form";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Nav from "./components/Nav";
import {Link} from "react-router-dom";
import BackgroundVideo from "./components/Backgroundvideo/BackgroundVideo";
import Heading from "./components/Heading"

import './App.css';


const GIFT = process.env.REACT_APP_API_KEY;

class App extends Component {

  constructor(){
    super()

  }

  
    console.log()

    render(){
      return (
        <div className="App">
          <header className="sub-header">
          <Nav/>
          <Heading/>
          </header>
          <Body id="content-body"/>
          <Footer/>
          </div>
      )
    }
  }




export default App;
