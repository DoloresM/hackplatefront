 import React from "react";




const Form = ({handleChange, handleSubmit}) => {

  return(
    <form  action="/guide" method="GET" id="form" onSubmit={handleSubmit} style={{marginBottom: "2rem"}}>
      <div class="category">
        <h3>Vegetables</h3>
        <section class="selects">
            <div class="column">
              <label for="bread">Lettuce</label>
              <input class="form-box" type="checkbox"  value="lettuce" onChange={handleChange}/>
            </div>
            <div class="column">
              <label for="bread">Spinach</label>
              <input class="form-box" type="checkbox"  value="spinach" onChange={handleChange}/>
            </div>
            <div class="column">
              <label for="bread">Kale</label>
              <input class="form-box" type="checkbox"  value="kale" onChange={handleChange}/>
            </div>
        </section>

        <section class="selects">
            <div class="column">
              <label for="bread">Cauliflower</label>
              <input class="form-box" type="checkbox"  value="bread"/>
            </div>
            <div class="column">
              <label for="bread">Cabbage</label>
              <input class="form-box" type="checkbox"  value="bread"/>
            </div>
            <div class="column">
              <label for="bread">broccoli</label>
              <input class="form-box" type="checkbox"  value="bread"/>
            </div>
        </section>

        <section class="selects">
            <div class="column">
              <label for="bread">Carrots</label>
              <input class="form-box" type="checkbox"  value="bread"/>
            </div>
            <div class="column">
              <label for="bread">Yucca</label>
              <input class="form-box" type="checkbox"  value="bread"/>
            </div>
            <div class="column">
              <label for="bread">Sweet Potato</label>
              <input class="form-box" type="checkbox"  value="bread"/>
            </div>
        </section>
    </div>



      <div class="category">
        <h3>Grains</h3>
        <section class="selects">
            <div class="column">
              <label for="bread">oats</label>
              <input class="form-box" type="checkbox"  value="lettuce"/>
            </div>
            <div class="column">
              <label for="bread">wheat</label>
              <input class="form-box" type="checkbox"  value="spinach"/>
            </div>
            <div class="column">
              <label for="bread">barley</label>
              <input class="form-box" type="checkbox"  value="kale"/>
            </div>
        </section>
        <section class="selects">

            <div class="column">
              <label for="bread">rice</label>
              <input class="form-box" type="checkbox"  value="bread"/>
            </div>
            <div class="column">
              <label for="bread">pasta</label>
              <input class="form-box" type="checkbox"  value="bread"/>
            </div>
            <div class="column">
              <label for="bread">quinoa</label>
              <input class="form-box" type="checkbox"  value="bread"/>
            </div>
        </section>
        <section class="selects">

            <div class="column">
              <label for="bread">farro</label>
              <input class="form-box" type="checkbox"  value="bread"/>
            </div>
            <div class="column">
              <label for="bread">millet</label>
              <input class="form-box" type="checkbox"  value="bread"/>
            </div>
            <div class="column">
              <label for="bread">couscous</label>
              <input class="form-box" type="checkbox"  value="bread"/>
            </div>
        </section>
      </div>



      <div class="category">
        <h3>Proteins</h3>
          <section class="selects">
              <div class="column">
                <label for="bread">Beans</label>
                <input class="form-box" type="checkbox" name="beans" value="beans"/>
              </div>
              <div class="column">
                <label for="bread">Tofu</label>
                <input class="form-box" type="checkbox" name="tofu" value="tofu"/>
              </div>
              <div class="column">
                <label for="bread">Nuts</label>
                <input class="form-box" type="checkbox" name="nuts" value="nuts"/>
              </div>
          </section>
          <section class="selects">
              <div class="column">
                <label for="bread">Seeds</label>
                <input class="form-box" type="checkbox" name="seeds" value="seeds"/>
              </div>
              <div class="column">
                <label for="bread">Wheat Gluten</label>
                <input class="form-box" type="checkbox" name="wheat gluten" value="wheat gluten"/>
              </div>
              <div class="column">
                <label for="bread">Broccoli</label>
                <input class="form-box" type="checkbox" name="broccoli" value="broccoli"/>
              </div>
          </section>
          <section class="selects">
              <div class="column">
                <label for="bread">Carrots</label>
                <input class="form-box" type="checkbox" name="carrots" value="carrots"/>
              </div>
              <div class="column">
                <label for="bread">Yucca</label>
                <input class="form-box" type="checkbox" name="yucca" value="yucca"/>
              </div>
              <div class="column">
                <label for="bread">Sweet Potato</label>
                <input class="form-box" type="checkbox" name="sweet potato" value="sweet potato"/>
              </div>
          </section>
      </div>


      <button type="submit" id="search">Submit</button>
    </form>
  )

}

export default Form;
