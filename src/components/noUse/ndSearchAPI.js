import React, {Component} from "react";
import Nav from "./Nav";
import Forming from "./nForm"
import {Link} from "react-router-dom";
import Footer from "./Footer";

const GIFT = process.env.REACT_APP_API_KEY;

const Search = ()=>{
const  getRecipe = async (e) => {
    e.preventDefault();
    const recipe = `vegan ${e.target.elements.recipe.value}`;
    const gift_call = await fetch
    (`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${GIFT}&q=${recipe}`);
    {/*returning all data in gift_call and storing the json v in result*/}
    const result = await gift_call.json();
    this.setState({recipes: result.recipes});
    console.log(this.state.recipes);
  }


      if(this.state.recipes){
          console.log ("here is your search" ,this.state.recipes)
          return(
          <div>
            <Nav/>
            <div className="sub-header">
              <h1>New Updates Coming Soon . . . </h1>
              <p className="search-heading">Hack your plate with <br/>a simple search.</p>
            </div>

            <Footer/>
          </div>
        )
      } else {
        console.log("no recipes?");

            return(
                <div>
                <Nav/>
                  <div class="construction">
                    COMING SOON . . .
                  </div>
                  <h1>Hello Search</h1>
                  <Forming/>

                </div>
              )
            }
          }





export default Search;
