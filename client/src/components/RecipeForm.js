import React, {useState,useEffect} from "react";
import {Form, Field, FormSpy} from "react-final-form";
import {createForm} from "final-form";
import {getList} from './ListFunctions'
import MealResults from './MealResults'


 const RecipeForm = () =>{
  const [data, setData] = useState([]);
    useEffect(() => {
      getList().then(data => {
        setData(data)
        console.log(data)
      }); 
    },[])
                                        
  {/*SUBMIT FORM FUNCTION*/}
  const onSubmit = (values)=>{
    window.alert(JSON.stringify(values,0,2))
    console.log(values)
    let userSelection = Object.keys(values)
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
      {active:true, pristine: true , submitting: true, values: true}
    )
  {/*FORM FIELD COMPONENT*/}
  const FormField = (props)=>{
  return(
    <Field name={JSON.stringify(props.props.item,0,2)} component="input" type="checkbox">
      {({input, meta, placeholder}) => (
        <div className={meta.active ? "active" : ""}>
          <label>{`${props.props.item}`}</label>
          <input {...input} placeholder={placeholder} />
          {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
      )}
    </Field>
  )
  }


  return(<React.Fragment>
      <MealResults/>
        <Form onSubmit={onSubmit} subscription={{submitting:true}}>
        {({handleSubmit, submitting, values}) =>(
          <form onSubmit = {handleSubmit}>
          {data.map((d,i) =>{
            console.log(d)
            return(
              <section className={d[i].category}>
                  <h6>{d[i].category}</h6>
                  {d.map((x,i)=>{
                    console.log(x.item)
                    return(
                      <FormField props={x}/>
                    )
                  })}
              </section>
            )
          })
          }
          </form>
        )}
        </Form> 
      </React.Fragment>) 
  }

export default RecipeForm
