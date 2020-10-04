{/*******REACT RETURNS: FORM STRUCTURE ********/}
<Form onSubmit={onSubmit} subscription={{submitting:true}}>
         {({handleSubmit, submitting, values}) =>(

         <form onSubmit = {handleSubmit}>
             <section className="frutis">
               <h3>Fruits</h3>
               {fruit.map(f =>{
                 return <FormField name={f}/>
               })}
             </section>
             <section className="vegetables">
               <h3>Vegetables</h3>
               {fruit.map(f =>{
                 return <FormField name={f}/>
               })}
             </section>
             <section className="soy">
               <h3>Soy</h3>
               {fruit.map(f =>{
                 return <FormField name={f}/>
               })}
             </section>
             <section className="butter">
               <h3>Butter</h3>
               {fruit.map(f =>{
                 return <FormField name={f}/>
               })}
             </section>
             <section className="dairyAlternative">
               <h3>Dairy Alternative</h3>
               {fruit.map(f =>{
               return <FormField name={f}/>
               })}
             </section>
             <section className="nutsAndSeeds">
               <h3>Nuts and Seeds</h3>
             {fruit.map(f =>{
                 return <FormField name={f}/>
              })}
             </section>
             <section className="wholeGrains">
               <h3>Whole Grains</h3>
               {fruit.map(f =>{
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