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


  // componentDidMount = ()=> {
  //   {/*retrive the items searched from localStorage once its set/saved*/}
  //   const json = localStorage.getItem("recipes");
  //   {/*return the data back to JSON format*/}
  //   const recipes = JSON.parse(json);
  //   this.setState({recipes:recipes});
  //
  // }
  //
  // componentDidUpdate = () =>{
  //   {/*turn the JSON data into a  sting*/}
  //   const recipes = JSON.stringify(this.state.recipes);
  //   {/*Assign this data to localStorge by passing in a name for it and then passing in the data*/}
  //   localStorage.setItem("recipes", recipes);
  // }


    render(){
      return (
        <div className="App">
          <header className="App-header">
            <nav>
              <ul>
                <li><Link to="#content-body">About</Link></li>
                <li><Link to="#content-body">Why Hack</Link></li>
                <li><Link to="/recipes">Search</Link></li>
              </ul>
            </nav>
            <div className="sub-header">
              <h1 style={{"textAlign": "center"}}>Hack My Plate</h1>
            </div>
          </header>
          <Body id="content-body"/>
          <Footer/>
          </div>
      )
    }
  }




export default App;
