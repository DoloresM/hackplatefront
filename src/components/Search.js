import React, {Component} from "react";
import Recipes from "./Recipes";
import Form from "./Form";
import Footer from "./Footer";
import Nav from "./Nav";
import {Link} from "react-router-dom";


const GIFT = process.env.REACT_APP_API_KEY;


class Search extends Component{
  constructor(){
    super()
    this.state = {
      recipes:null
    }
  }



  getRecipe = async (e) => {
    e.preventDefault();
    const recipe = `vegan ${e.target.elements.recipe.value}`;
    const gift_call = await fetch
    (`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${GIFT}&q=${recipe}`);
    {/*returning all data in gift_call and storing the json v in result*/}
    const result = await gift_call.json();
    this.setState({recipes: result.recipes});
    console.log(this.state.recipes);
  }

  render(){
      if(this.state.recipes){
        console.log ("here is your search" ,this.state.recipes)
        return(
          <div>
          <Nav/>
            <div className="sub-header">
              <p className="search-heading">Hack your plate with <br/>a simple search</p>
                .
            </div>
            <Form getRecipe={this.getRecipe}/>
            <Recipes incomingRecipes={this.state.recipes}/>
            <Footer/>
          </div>
        )
      } else {
        console.log("no recipes?");
            return(
                <div>
                <Nav/>
                  <div className="sub-header">
                  <p className="search-heading">Hack your plate with <br/> a simple search</p>.
                  </div>
                  <Form style={{"marginBottom":"50px"}}  getRecipe={this.getRecipe}/>
                  <Footer/>
                </div>
              )
            }
          }
        }


export default Search;
