import React, {useState, useEffect, useRef, Component} from "react";
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";
import styled from "styled-components"
import Nav from "./Nav";
import Form from "./Form";
import Plate from "./Plate";
import Footer from "./Footer"

export default class Guide extends Component {
  constructor(props){
    super(props)
    this.state = {
      ingredients: []

    }
  }


  buttonClick = (e)=>{
    e.preventDefault()
  }
  handleChange = (event) =>{
    const l = event.target.value;
    let join = this.state.ingredients.concat(l)
    this.setState({
      ingredients: join
    })
    console.log(event)


  }

  handleSubmit = (e)=>{
    e.preventDefault();
    if(this.state.ingredients.length > 1){
      this.state.ingredients.map(item =>(<li key={item}>{item}</li>))
    }


  }


  render () {
      console.log(this.state.ingredients)

    return(
      <GuideWrapper>

          <Nav/>
          <div id="guideHeader">
            <div class="headline">
              <h1>Create Your Plate</h1>
            </div>
          </div>
          <Form  buttonClick={this.buttonClick} handleChange={this.handleChange}/>
          <Plate ingredients={this.ingredients} handleSubmit={this.handleSubmit}/>
          <Footer/>

      </GuideWrapper>
    );
  }
}



const GuideWrapper = styled.div`

`
