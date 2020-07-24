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
            <Form onSubmit ={showResults} subscripttion={{ submitting:true}}>
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
