import React, {useState,useEffect} from "react";
import {Form, Field, FormSpy} from "react-final-form";
import {createForm} from "final-form";
import {getList} from './ListFunctions'

{/*FORM FIELD COMPONENT*/}
const FormField = (props)=>{
  return(
    <Field name={props.item} component="input" type="checkbox">
      {({input, meta, placeholder}) => (
        <div className={meta.active ? "active" : ""}>
          <label>{props.item}</label>
          <input {...input} placeholder={placeholder} />
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      )}
    </Field>
  )
}


//*********************************************************************************

{/*FORM COMPONENT*/}
 const RecipeForm = () =>{

   {/*SETTING STATE: FUNCTIONAL COMPONENT */}
   const [recipeIngredients, setRecipeIngredients] = useState([]);
   {/*setting state for returned meals */}
   // const [mealResults, setMeals] = useState({});

  useEffect(() => {
    getList().then(data => {
      fillCategory(data)
      console.log(data)
      setRecipeIngredients(data)
    })
  },[])

 

  useEffect(()=>{
    if(recipeIngredients.length > 1){
      fillCategory()
    } else{
      console.log("needs to be rerendered")
    } 
  },[recipeIngredients])



  useEffect(()=>{
    console.log("render");
  })

  console.log("rendering");

let wholeGrain
let nutsAndSeed
let dairyAlternative
let butter
let soyProtein
let vegetable 
let fruit
 const fillCategory = async (x)=>{
    if(recipeIngredients.length){
    wholeGrain = recipeIngredients.filter(x => x.category == "wholeGrains")
    console.log(wholeGrain)
    nutsAndSeed =  recipeIngredients.filter(x => x.category == "nutsAndSeeds")
    console.log(nutsAndSeed)
    dairyAlternative = recipeIngredients.filter(x => x.category == "dairyAlternative")
    console.log(dairyAlternative)
    butter = recipeIngredients.filter(x => x.category == "butters")
    console.log(butter)
    soyProtein = recipeIngredients.filter(x => x.category == "soyProtein")
    console.log(soyProtein)
    vegetable = recipeIngredients.filter(x => x.category == "vegetables")
    console.log(vegetable)
    fruit = recipeIngredients.filter(x => x.category == "fruits")
    console.log(fruit)
  }
 console.log(wholeGrain)
 
  return <h3></h3> 
}

let yes =  wholeGrain ? wholeGrain[0].category : null
//~~~~~~~~~~~DECONSTRUCTIG RECIPE CATEGORIES~~~~~~~~~~~~~~
const deconstructRecipes = ()=>{
  if(recipeIngredients.length){
    recipeIngredients.map(ingredients =>{
      return ingredients.category
   })
  }
}

   {/*!!!!!!TODO UPDATING FORM FUNCTIONS!!!!!!!*/}

   {/*SUBMIT FUNCTION*/}
    const onSubmit = (values)=>{
      window.alert(JSON.stringify(values,0,2))
      console.log(values)
      let userSelection = Object.keys(values)
      {/*let ingredientState = [...userSelection, ...recipeIngredients]*/}
    }

    {/*****CREATING FORM*****/}
    const initialState = {};
    const form = createForm({onSubmit})
    let inConstructor = true;

    {/*******SUBSCRIBE TO FORM STATE*******/}
    let unsubscribe = form.subscribe(
      formstate=>{
        if(inConstructor){
          initialState.formState = formstate
        } else{
          console.log("no formstate")
        }
      },
      {active:true, pristine: true, submitting: true, values: true}
    )

  
  
      if(recipeIngredients.length ){
    console.log(recipeIngredients)
    return(
      <React.Fragment>
      <section className="frutis">
          <h3>{wholeGrain[0]}</h3>       
      </section>
      </React.Fragment> 
    )
  } else {
    return <h1>need data</h1>
  } 
}






export default RecipeForm
