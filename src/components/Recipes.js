import React  from "react";
import Footer from "./Footer";
import Nav from "./Nav";

import {Link} from "react-router-dom";
const Recipes = (props) => (
    <div>
      <div>
        {props.incomingRecipes.map((recipe) =>{
          console.log(recipe.recipe_id)
          return (
            <div className="recipe-box" key={recipe.recipe_id} style={{marginBottom: "2rem"}}>

                  <img className="recipe-image"
                   src={recipe.image_url}
                   alt={recipe.title}/>
                   <div className= "description">
                      <h3>
                      {recipe.title.length < 20 ? `${recipe.title}`:
                      `${recipe.title.substring(0, 25)} ...`}
                      </h3>
                      <p>Publisher: <span>
                        {recipe.publisher}
                      </span></p>
                   </div>
                   <button style = {{"padding": "15px", "borderRadius": "20px"}}>
                      <Link style = {{"fontSize":"14px"}} to={{
                        pathname: `/recipe/${recipe.recipe_id}`,
                        state: {recipe:recipe.title}
                      }}>View Recipe</Link>
                   </button>
              </div>


          );
        })}
      </div>
      <Footer/>
    </div>
  );


export default Recipes;
