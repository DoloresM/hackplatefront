import React, {useState,useEffect} from "react";
import {Form, Field, FormSpy} from "react-final-form";
import {createForm} from "final-form";
import {ingredients,fruits, vegetables, soy, butter, dairyAlternative, meals, nutsAndSeeds, wholeGrains} from "../data"

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

{/*FORM COMPONENT*/}
 const RecipeForm = () =>{
   {/*SETTING STATE: FUNCTIONAL COMPONENT */}
   const [recipeIngredients, getIngredients] = useState([]);

   {/**/}
   const onSubmit = (values)=>{
     window.alert(JSON.stringify(values,0,2))
     let userSelection = Object.keys(values)
     let ingredientState = [...userSelection, ...recipeIngredients]
     getIngredients(recipeIngredients = ingredientState )
     console.log(recipeIngredients)
   }

   const initialState= {};
   const form = createForm({onSubmit})
   let inConstructor = true;
   {/*Subscribe to formstate*/}
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
   {/*Subscribe to fieldstate*/}
   let unsubscribeFields = []

  return(
    <React.Fragment>
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
    </React.Fragment>

  )
}

export default RecipeForm
