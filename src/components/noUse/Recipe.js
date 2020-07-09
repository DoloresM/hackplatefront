import React, {Component} from "react";
import Nav from "./Nav";
import {Link} from "react-router-dom";


const GIFT = process.env.REACT_APP_API_KEY

class Recipe extends Component {
  state ={
    activeRecipe: []
  }

  componentDidMount = async () =>{
    // console.log(this.props)
    const title = this.props.location.state.recipe;
    const request = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${GIFT}&q=${title}`);
    {/*returning all data in gift_call and storing the json v in result*/}
    const response = await request.json();
    this.setState({activeRecipe: response.recipes[0]});
    console.log(this.state.activeRecipe);
  }

  render(){
console.log("yes")
    const recipe = this.state.activeRecipe;

    if(!this.state.activeRecipe.length){
      console.log(recipe.ingredients);
      return(

      <div>
      <Nav/>

          <div className = "container">
          <div className="recipe">
            <img style={{"display" : "inline-box"}} className="recipe-image" src={recipe.image_url} alt={recipe.title}/>
            <div id="recipe-desc" >
            <h2>{recipe.title}</h2>
            <h3>
              Publisher: <span>{recipe.publisher} </span>
            </h3>
            <h2>Website:
              <span><a href={recipe.source_url}>{recipe.source_url}</a></span>
            </h2>
            <p>{recipe.ingredient}</p>
            <button>
              <Link to="/">Go Home </Link>
            </button>
            </div>
            </div>
          </div>
        </div>
        )
    }else{
      console.log("no recipe");
      return(
        <div>
        <p>new search please</p>
        </div>
      )
    }
  }

  }


export default Recipe;
