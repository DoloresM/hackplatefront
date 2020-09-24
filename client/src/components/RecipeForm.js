import React, {useState,useEffect} from "react";
import {Form, Field, FormSpy} from "react-final-form";
import {createForm} from "final-form";
import {ingredients,fruits, vegetables, soy, butter, dairyAlternative, meals, nutsAndSeeds, wholeGrains} from "../data";
import {getList} from './ListFunctions'


{/*FORM FIELD COMPONENT*/}
const FormField = (props)=>{
  return(
    <Field name={props.name} component="input" type="checkbox">
      {({input, meta, placeholder}) => (
        <div className={meta.active ? "active" : ""}>
          <label>{props.name}</label>
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
   {/*setting state selected ingredients*/}
   const [recipeIngredients, setIngredients] = useState([]);
   {/*setting state selected ingredients*/}
   let [recipeI, setI] = useState({});
   {/*setting state for returned meals */}
   const [mealResults, setMeals] = useState({});

{/* useEffect(); instead of componentDidMount for importing the inital set of needed data: "getAll()"
componentDidMount() {
  this.getAll()
}
*/}

{/*implement this when the state of the component needs to change/ when the component needs to update
componentDidUpdate(){
}
*/}

useEffect(() => {
  getAll();
})

{/*  this.setState(
    {
      term: '',
      items: [...data]
    },
    () => {
      console.log(this.state.items)
    }
  )
}) */}

var x;
const getAll = () => {
  getList().then(data => {
     x = data
    setI(recipeI = data)
  })
  console.log(x)
}



{/*useEffect() also replaces componentDidUpdate . . . . . */}


   {/*!!!!!!TODO UPDATING FORM FUNCTIONS!!!!!!!*/}

   {/*SUBMIT FUNCTION*/}
   const onSubmit = (values)=>{
     getAll()
     window.alert(JSON.stringify(values,0,2))
     console.log(values)
     let userSelection = Object.keys(values)
     {/*let ingredientState = [...userSelection, ...recipeIngredients]*/}
     setIngredients(userSelection)

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


   {/*******REACT RETURNS: FORM STRUCTURE ********/}
   let unsubscribeFields = []
   if(setI.length > 0){
     return(

      <React.Fragment>

      {/*!!TODO: map "sections"!!*/}
        <Form onSubmit={onSubmit} subscription={{submitting:true}}>
        {({handleSubmit, submitting, values}) =>(

          <form onSubmit = {handleSubmit}>
            <section className="frutis">
              <h3>Fruits</h3>
              {fruits.map(f =>{
                return <FormField name={f}/>
              })}
            </section>
            <section className="vegetables">
              <h3>Vegetables</h3>
              {vegetables.map(f =>{
                return <FormField name={f}/>
              })}
            </section>
            <section className="soy">
              <h3>Soy</h3>
              {soy.map(f =>{
                return <FormField name={f}/>
              })}
            </section>
            <section className="butter">
              <h3>Butter</h3>
              {butter.map(f =>{
                return <FormField name={f}/>
              })}
            </section>
            <section className="dairyAlternative">
              <h3>Dairy Alternative</h3>
              {dairyAlternative.map(f =>{
                return <FormField name={f}/>
              })}
            </section>
            <section className="nutsAndSeeds">
              <h3>Nuts and Seeds</h3>
              {nutsAndSeeds.map(f =>{
                return <FormField name={f}/>
              })}
            </section>
            <section className="wholeGrains">
              <h3>Whole Grains</h3>
              {wholeGrains.map(f =>{
                return <FormField name={f}/>
              })}
            </section>
            <button  type="submit" disable={submitting}>Submit</button>
            <FormSpy subscription={{values:true}}>
              {({values}) =><prev>{JSON.stringify(values, undefined, 2)}</prev>}
            </FormSpy>
          </form>
        )}
      </Form>
      <p>{recipeIngredients}</p>
      </React.Fragment>
    )

  } else {
    return(
      <h1>Data is Needed</h1>
    )
  }

}

export default RecipeForm
