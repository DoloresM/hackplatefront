import React, {Component} from 'react';
import Form from "./components/Form";
import Footer from "./components/Footer";
import Body from "./components/Body";
import {Link} from "react-router-dom";

import './App.css';




class App extends Component {

  constructor(){
    super()

  }





    render(){
      return (
        <div className="App">
          <header className="App-header">
            <video src="https://gcs-vimeo.akamaized.net/exp=1565342542~acl=%2A%2F448954663.mp4%2A~hmac=e510e8e5a55f6ddbb24e4d76c7912ac753d39ccb1a0ab3eeaa9066ad6bac90fa/vimeo-prod-skyfire-std-us/01/4565/5/147827932/448954663.mp4" type="vidoe/mp4" poster =""
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100vh',
                }} loop autoplay="true"
            />
            <nav>
              <p id="logo">#HackMyPlate</p>
              <ul>
                <li className="nav-list"><Link style={{"color":"white", "textDecorationLine":"none"}} to="#content-body">About</Link></li>
                <li className="nav-list"><Link style={{"color":"white", "textDecorationLine":"none"}} to="#content-body">Why Hack</Link></li>
                <li className="nav-list"><Link  style={{"color":"white", "textDecorationLine":"none"}}to="/recipes">Search</Link></li>
              </ul>
            </nav>

          </header>

          <Body id="content-body"/>
          <Footer/>
          </div>
      )
    }
  }




export default App;
