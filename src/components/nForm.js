import React from "react";
import { createForm } from 'final-form';
import { Form, Field } from "react-final-form";
import {meals} from "../data";
{/*import {Form, FormSpy} from "react-final-form"*/}
{/*import {Field} from "react-final-form-html5-validation";*/}
{/*import createDecorator from "final-form-focus";*/}


class FieldComponents extends React.Component {
  render(){
    return (
      <div>
        <label>First Name</label>
        <input name="firstName" placeholder="First Name"/>
      </div>
    )
  }
}


const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

class RecipeForm extends React.Component {
  constructor() {
    super()
    const initialState = {}
    let inConstructor = true
    this.form = createForm({ onSubmit })

    // subscribe to form changes
    this.unsubscribe = this.form.subscribe(
      formState => {
        // cannot call setState in constructor, but need to on subsequent notifications
        if (inConstructor) {
          initialState.formState = formState
        } else {
          this.setState({ formState })
        }
        console.log(formState)
        console.log(initialState)
      },
      { active: true, pristine: true, submitting: true, values: true }
    )

    // register fields
    this.unsubscribeFields = ['firstName', 'lastName'].map(fieldName =>
      this.form.registerField(
        fieldName,
        fieldState => {
          // cannot call setState in constructor, but need to on subsequent notifications
          if (inConstructor) {

            initialState[fieldName] = fieldState
          } else {
            this.setState({ [fieldName]: fieldState })
          }
        },
        { value: true }
      )
    )
    this.state = initialState
    inConstructor = false
    console.log(inConstructor)
  }

  //creating a field component


  componentWillUnmount() {
    this.unsubscribe()
    this.unsubscribeFields.forEach(unsubscribe => unsubscribe())
  }

  handleSubmit = event => {
    event.preventDefault()
    this.form.submit()
  }



render() {
console.log(this.state.formState)
console.log(this.state)
    const { formState, firstName, lastName } = this.state
    return (
      <React.Fragment>
      <FieldComponents/>

        <h1>🏁 Final Form - Simple React Example</h1>
        <a href="https://github.com/erikras/final-form#-final-form">
          Read Docs
        </a>
        <p>
          This is primarily for educational purposes. If you are using React,
          you should <em>probably</em> be using{' '}
          <a href="https://github.com/erikras/react-final-form#-react-final-form">
            🏁 React Final Form
          </a>
          .
        </p>
        <FieldComponents/>
        <form onSubmit={this.handleSubmit}>
          <div>

            <label>First Name</label>
            <input
              name="firstName"
              onBlur={() => firstName.blur() }
              onChange={event =>
                firstName.change(event.target.value || undefined)
              }
              onFocus={() => firstName.focus()}
              value={firstName.value || ''}
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              name="firstName"
              onBlur={() => lastName.blur()}
              onChange={event =>
                lastName.change(event.target.value || undefined)
              }
              onFocus={() => lastName.focus()}
              value={lastName.value || ''}
              placeholder="Last Name"
            />
          </div>
          <div className="buttons">
            <button type="submit" disabled={formState.submitting}>
              Submit
            </button>
            <button
              type="button"
              onClick={() => this.form.reset()}
              disabled={formState.submitting || formState.pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(this.state, 0, 2)}</pre>
        </form>
      </React.Fragment>
    )
  }
}

export const selection = ["quinoa","apple","carrots","avacado"]
export default RecipeForm;
