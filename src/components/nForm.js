import React, {Component} from "react";
import {Form, FormSpy} from "react-final-form";
import {Field} from "react-final-form-html5-validation";
import createDecorator from "final-form-focus";
import {MealConsumer} from "../context";



export default class Forming extends Component {
  constructor(props){
    super(props)
    this.state={}
  }

focusOnError = createDecorator()

sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

 showResults = async values => {
    await this.sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
    console.log(values)
  }


required = value => (value ? undefined : 'Required')

  render(){
    return(
      <div>
        <h1>Making Meals</h1>
        <Form onSubmit ={this.showResults}
          subscripttion={{
            submitting:true,
          }}
        >
          {({handleSubmit, submitting, values}) => (
            <form onSubmit ={handleSubmit}>
              <section className="grains">
                <Field name="quinoa" component="select" placeholder="username" type="checkbox" >
                  {({input, meta, placeholder}) => (
                    <div className={meta.active ? "active" : ""}>
                      <label>Quinoa </label>
                      <input {...input} placeholder={placeholder}/>
                      {meta.error && meta.touched && <span>{meta.error}</span>}
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
        <div>

        </div>
      </div>
    )
  }
}

export const selection = ["quinoa","apple","carrots","avacado"]
