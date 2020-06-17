import React, {Component} from 'react';
import Form from "./components/Form";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Nav from "./components/Nav";
import {Link} from "react-router-dom";
import BackgroundVideo from "./components/Backgroundvideo/BackgroundVideo";

import './App.css';




class App extends Component {

  constructor(){
    super()

  }


    render(){
      return (
        <div className="App">
          <header className="App-header">
            <Nav/>
            <BackgroundVideo/>
          </header>

          <Body id="content-body"/>
          <Footer/>
          </div>
      )
    }
  }




export default App;
