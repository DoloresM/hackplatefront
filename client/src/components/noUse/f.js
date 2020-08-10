import React, {useState} from "react";
import {Form, FormSpy} from "react-final-form";
import {Field} from "react-final-form-html5-validation";
import createDecorator from "final-form-focus";
import {MealConsumer} from "../context";

const [selectedIngredients, collector] = useState([]);
const addItem = ()=>{input.checked ? collector(selectedIngredients += 1) : console.log("no");
const focusOnError = createDecorator();
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const showResults = async values => {
      await this.sleep(300)
      window.alert(JSON.stringify(values, 0, 2))
      console.log(values)
    };
const required = value => (value ? undefined : 'Required');



const Forming = (props)=>{
  return(
          <div>
            <h1>Making Meals</h1>
            <Form onSubmit ={showResults} subscription={{ submitting:true}}>
              {({handleSubmit, submitting, values}) => (
                <form onSubmit ={handleSubmit}>
                  <section className="grains">
                    <Field name="quinoa" component="select" placeholder="username" type="checkbox" >
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>Quinoa </label>
                          <input {...input} placeholder={placeholder}/>
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                          {console.log(input.checked)}
                            const addItem = ()=>{input.checked ? collector(selectedIngredients += 1) : console.log("no") }
                          {input.checked ? console.log("yes"):console.log("no")};
                          {console.log(meta)}
                          {console.log(placeholder)}
                        </div>
                      )}
                    </Field>
                    <Field name="rice" component="input" placeholder="username" type="checkbox">
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>Rice</label>
                          <input {...input} placeholder={placeholder} />
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field name="bread" component="select" placeholder="username" type="checkbox">
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>Bread </label>
                          <input {...input} placeholder={placeholder}/>
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                  </section>
                  <section className="proteins">
                    <Field name="legumes" component="select" placeholder="username" type="checkbox" >
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>Legumes </label>
                          <input {...input} placeholder={placeholder}/>
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field name="seeds" component="input" placeholder="username" type="checkbox">
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>Seeds </label>
                          <input {...input} placeholder={placeholder} />
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field name="nuts" component="select" placeholder="username" type="checkbox">
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>Nuts </label>
                          <input {...input} placeholder={placeholder}/>
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                  </section>
                  <section className="fruits">
                    <Field name="apple" component="select" placeholder="username" type="checkbox" >
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>Apple </label>
                          <input {...input} placeholder={placeholder}/>
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field name="berry" component="input" placeholder="username" type="checkbox">
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>Berry </label>
                          <input {...input} placeholder={placeholder} />
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field name="melon" component="select" placeholder="username" type="checkbox">
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>Melon </label>
                          <input {...input} placeholder={placeholder}/>
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                  </section>
                  <section className="veg">
                    <Field name="carrot" component="select" placeholder="username" type="checkbox" >
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>carrot </label>
                          <input {...input} placeholder={placeholder}/>
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field name="kale" component="input" placeholder="username" type="checkbox">
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>kale</label>
                          <input {...input} placeholder={placeholder} />
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field name="aspragus" component="select" placeholder="username" type="checkbox">
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>aspragus</label>
                          <input {...input} placeholder={placeholder}/>
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                  </section>
                  <section className="dairy">
                    <Field name="almond milk" component="select" placeholder="username" type="checkbox" >
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>almond milk </label>
                          <input {...input} placeholder={placeholder}/>
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field name="oat milk" component="input" placeholder="username" type="checkbox">
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>oat milk </label>
                          <input {...input} placeholder={placeholder} />
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field name="coconut milk" component="select" placeholder="username" type="checkbox">
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>coconut milk </label>
                          <input {...input} placeholder={placeholder}/>
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                  </section>
                  <section className="fats">
                    <Field name="avacado" component="select" placeholder="username" type="checkbox" >
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>avacado </label>
                          <input {...input} placeholder={placeholder}/>
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field name="coconut oil" component="input" placeholder="username" type="checkbox">
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>coconut oil </label>
                          <input {...input} placeholder={placeholder} />
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                    <Field name="olive oil" component="select" placeholder="username" type="checkbox">
                      {({input, meta, placeholder}) => (
                        <div className={meta.active ? "active" : ""}>
                          <label>olive oil </label>
                          <input {...input} placeholder={placeholder}/>
                          {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                      )}
                    </Field>
                  </section>
                  <button type="submit" disable={submitting}>Submit</button>
                  <FormSpy subscription={{values:true}}>
                    {({values}) =><prev>{JSON.stringify(values, undefined, 2)}</prev>}
                  </FormSpy>
                </form>
              )}
            </Form>


    <h1>New Form</h1>
    <Form
      onSubmit={formObj => {
        console.log(formObj);
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name="name">
            {({ input }) => (
              <input
                placeholder="Name"
                type="text"
                {...input}
              />
            )}
          </Field>
          <Field name="email">
            {({ input }) => (
              <input placeholder="Email" type="email" {...input}/>
            )}
          </Field>
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  </div>
 )
}

{/*most recent code Form no in use */}
<div>
  <h1>Making Meals</h1>
  {/*FormSpy needed to keep track/ read form state w/o rerendering the entire form*/}
  <Form onSubmit ={showResults} subscripttion={{submitting:true}}>
  {/*RENDER PROPR(implicitly calling the rendering of the form ) - child component being passed down by way of function, which is given
    "formstate", handleSubmit (which is desinged to be given to the html object) */}
    {/*below the handleSubmit methods along with the form state is deconstructed and being passed */}
    {({handleSubmit, submitting, values}) => (
      <form onSubmit ={handleSubmit}>
        <section className="grains">
          <Field name="quinoa" component="select" placeholder="username" type="checkbox" validate ={required}>
            {/*below the field state is deconstructed and being passed */}
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
              {console.log(input)}
              <label>Quinoa</label>
                {/*Connecting event loops to input: below input property is further deconstructed: which include event hooks: onBlur, onFocus, onChange etc.*/}
                <input {...input} placeholder={placeholder}/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="rice" component="select" placeholder="username" type="checkbox">
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>Rice</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="bread" component="select" placeholder="username" type="checkbox">
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>Bread </label>
                <input {...input} placeholder={placeholder}/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </section>
        <section className="proteins">
          <Field name="legumes" component="select" placeholder="username" type="checkbox" >
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>Legumes </label>
                <input {...input} placeholder={placeholder}/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="seeds" component="input" placeholder="username" type="checkbox">
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>Seeds </label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="nuts" component="select" placeholder="username" type="checkbox">
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>Nuts </label>
                <input {...input} placeholder={placeholder}/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </section>
        <section className="fruits">
          <Field name="apple" component="select" placeholder="username" type="checkbox" >
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>Apple </label>
                <input {...input} placeholder={placeholder}/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="berry" component="input" placeholder="username" type="checkbox">
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>Berry </label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="melon" component="select" placeholder="username" type="checkbox">
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>Melon </label>
                <input {...input} placeholder={placeholder}/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </section>
        <section className="veg">
          <Field name="carrot" component="select" placeholder="username" type="checkbox" >
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>carrot </label>
                <input {...input} placeholder={placeholder}/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="kale" component="input" placeholder="username" type="checkbox">
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>kale</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="aspragus" component="select" placeholder="username" type="checkbox">
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>aspragus</label>
                <input {...input} placeholder={placeholder}/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </section>
        <section className="dairy">
          <Field name="almond milk" component="select" placeholder="username" type="checkbox" >
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>almond milk </label>
                <input {...input} placeholder={placeholder}/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="oat milk" component="input" placeholder="username" type="checkbox">
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>oat milk </label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="coconut milk" component="select" placeholder="username" type="checkbox">
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>coconut milk </label>
                <input {...input} placeholder={placeholder}/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </section>
        <section className="fats">
          <Field name="avacado" component="select" placeholder="username" type="checkbox" >
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>avacado </label>
                <input {...input} placeholder={placeholder}/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="coconut oil" component="input" placeholder="username" type="checkbox">
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>coconut oil </label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
          <Field name="olive oil" component="select" placeholder="username" type="checkbox">
            {({input, meta, placeholder}) => (
              <div className={meta.active ? "active" : ""}>
                <label>olive oil </label>
                <input {...input} placeholder={placeholder}/>
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>
        </section>

        <button type="submit" disable={submitting}>Submit</button>
        <FormSpy subscription={{values:true}}>
          {({values}) =>
            <prev>{JSON.stringify(values, undefined, 2)}{selectedItems (values)}</prev>
          }
        </FormSpy>
      </form>
    )}
  </Form>
  <div>

  </div>
    </div>





  {/*most recent code Form no in use */}
  console.log(meals)
  {/*const focusOnError = createDecorator();*/}
  const [ingredientsSelected, setItems] = useState([]);
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
  const showResults = async values => {
        await this.sleep(300)
        window.alert(JSON.stringify(values, 0, 2))
        console.log(values)
        {/*this.setstate should run to set the state of the selected ingredientds by passing selection array*/}
      };
  {/*this "required function is pass down on the field where the form needs to validate a value"*/}
  const required = value => (value ? undefined : 'Required');
  {/*addItem function needs to extract value of input and hold it in an array while its checked property is true
    --if put as a property on input it will activate everytime the form is rendered*/}
  const selectedItems = (valObject)=>{
    let list = [];
    for(const property in valObject){
      valObject[property] == true? list=[...list,property]: console.log("no")
    }
    console.log(list);
    return list;
  }
  const grain = [];
  const legume = "legume";
  const nut = "nut";
  const seed = "seed";
  const vegetable = "vegetable";
  const fruit = "fruit";
  const foodCategory = [grain,legume,nut,seed,vegetable,fruit];
  const createField = ()=>{
    foodCategory.map(name =>{
      return <Field name="namer" component="input">
    })
  }
{/*------------Attempt of using createForm method to render a form----noWorking---------------*/}
const RecipeForm = createForm({
  onSubmit = onSubmit,
  validate = values =>{ const errors = {}
    if(!values.username){
      errors.username = "Required"
    }
    if(!values.password){
      errors.password ="Required"
    }
    if(!values.confirm){
      errors.confirm = "Required"
    } else if (values.confirm !==values.password){
      errors.confirm = "Must Match"
    }
  return errors;
  },
  render = ({handleSubmit, form, submitting, pristine, values})=>(
    <form onSubmit = {handleSubmit}>
      <Field name="username">
        {
          (input, meta =>(
            <div>
              <label> Username </label>
              <input {...input} type="text" placeholder="Username"/>
              {meta.error && meta.touched && <span>{meta.error}</span>}
            </div>
          ))
        }
      </Field>
    </form>
  )
}
