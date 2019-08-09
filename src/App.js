import React, {Component} from 'react';
import Form from "./components/Form";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Nav from "./components/Nav";
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
            <video src="https://storage.coverr.co/videos/coverr-philippines-spices-1559212666899?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6IjExNDMyN0NEOTRCMUFCMTFERTE3IiwiaWF0IjoxNTY1MzQ0ODE5LCJleHAiOjE1NjUzNDg0MTl9.iC8X_4Sjw7xaGSpAq_Uw_Dv2hlM0z4bjjH1bPGmF_24"
             poster ="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100vh',
                }} loop autoplay="true"
            />

            <Nav/>
          </header>

          <Body id="content-body"/>
          <Footer/>
          </div>
      )
    }
  }




export default App;
