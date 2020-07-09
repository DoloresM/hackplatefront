import React, {Component} from "react";
import {meals} from "./data";
import {selection} from "./components/nForm"

const MealContext = React.createContext();
class MealProvider extends Component {
    state ={
    selectedMeals: [],
    /*mealType: typeSelected,*/
    ingredients: selection
  }

  componentDidMount(){
    this.mealSuggestion();
  }


  typeSelected (select){
    if(select ===`lunch/dinner`){
      console.log("l/d");
    }else if(select === `breakfast`){
      console.log("b");
    }else{
      console.log("snack")
    }
  }

  mealSuggestion(){
    let tempFoods = [];
    selection.forEach(item=>{
      const ingredient = {...item};
      const tempMeals = [...tempFoods, ingredient]
    })

  }

    render(){
      return(
        <MealContext.Provider
          value={{
            ...this.state,
            typeSelected:this.typeSelected,
            mealSuggestion:this.mealSuggestion
          }}
        >
          {this.props.children}
        </MealContext.Provider>
      );
    }
  }

  const MealConsumer = MealContext.Consumer;
  export {MealProvider, MealConsumer}
