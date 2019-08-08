import React, {Component} from "react";
import Recipes from "./Recipes";
import Form from "./Form";

const GIFT = process.env.REACT_APP_API_KEY

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
        console.log (this.state.recipes)
        return(
          <div>
          <Form/>
          <Recipes incomingRecipes={this.state.recipes}/>
          </div>
        )
      } else {
        console.log("no recipes?");
            return(
                <div>
                <div className="sub-header">
                  <h1 style={{"textAlign": "center"}}>Hack My Plate</h1>
                </div>
                <Form getRecipe={this.getRecipe}/>
                </div>
              )
      }
    }
}


export default Search;
