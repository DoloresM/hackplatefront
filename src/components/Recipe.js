import React, {Component} from "react";
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

      return(
      <div>
          <div className = "orange">
          <div className="recipe">
            <img className="recipe-image" src={recipe.image_url} alt={recipe.title}/>
            <h3>{recipe.title}</h3>
            <h4>
              Publisher: <span>{recipe.publisher} </span>
            </h4>
            <p>Website:
              <span><a href={recipe.source_url}>{recipe.source_url}</a></span>
            </p>
            <p>{recipe.ingredients}</p>

            <button>
              <Link to="/">Go Home </Link>
            </button>
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
