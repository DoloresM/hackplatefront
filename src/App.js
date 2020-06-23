import React, {Component} from 'react';
import Form from "./components/Form";
import Footer from "./components/Footer";
import Body from "./components/Body";
import Nav from "./components/Nav";
import {Link} from "react-router-dom";
import Heading from "./components/Heading"

import './App.css';


const GIFT = process.env.REACT_APP_API_KEY;

class App extends Component {
  constructor(){
    super()
  }
  componentDidMount(){
    this.videos = this.getVideo();
  }

  getVideo = async ()=>{
     const gift_call = await fetch(`https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=${GIFT}
     &fields=items(id,snippet(channelId,title,categoryId),statistics)&part=snippet,statistics`)
      const result = await gift_call.json
      console.log(result)
   }






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
