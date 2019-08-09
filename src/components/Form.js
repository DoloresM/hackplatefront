import React from "react";

const Form = (props) => {
  return(
    <form id= "form" onSubmit={props.getRecipe} style={{marginBottom: "2rem"}}>
      <input id="form-box" type="text" name="recipe" placeholder=""/>
      <button id="search">Submit</button>
    </form>
  )
}

export default Form;
