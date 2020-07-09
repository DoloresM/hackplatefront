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
      item:"",
      ingredients: []
    }
  }
  /* THIS IS PRE 'item' state inclustion
  handleChange = (event) =>{
    const l = event.target.value;
    let join = this.state.ingredients.concat(l)
    this.setState({
      ingredients: join
    })
    console.log(event)
  }*/

  addItem = (event)=>{
    const item = event.target.value;
    if(event.target.checked){
      this.setState((state)=>{
        const ingredients = this.state.ingredients.concat(item);
        return{
          ingredients,
          item: " "
        };
      });
    }else{
      this.setState((state)=>{
        const ingredients = this.state.ingredients.filter((index)=>{
          console.log(index);
          return index !=item;
        })
        return{
          ingredients
        }
      })
    }
  };

  removeItem = (event) =>{
    if(!event.target.checked){
    console.log(event.target.value);

      console.log(`here is ${this.state.ingredients}`)
    }

  }

  handleSubmit = (e)=>{
    console.log(this.state)
  }
  buttonClick = ()=>{
    alert(`${this.state.ingredients},${this.state.ingredients.length}`)
  }

  render () {

    return(
      <GuideWrapper>

          <Nav/>
          <div id="guideHeader">
            <div class="headline">
              <h1>Create Your Plate</h1>
            </div>
          </div>
          <Form  buttonClick={this.buttonClick} addItem={this.addItem} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
          <Plate ingredients={this.state.ingredients} />
          <Footer/>

      </GuideWrapper>
    );
  }
}



const GuideWrapper = styled.div`

`
