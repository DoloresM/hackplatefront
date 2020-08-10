 import React from "react";
 import Plate from "./Plate"


const Form = ({ buttonClick, addItem}) => {

  return(
    <form   id="form" style={{marginBottom: "2rem"}}>
      <div class="category">
        <h3>Vegetables</h3>
        <section class="selects">
            <div class="column">
              <label for="bread">Lettuce</label>
              <input class="form-box" type="checkbox"  value="lettuce" onChange={addItem}/>
            </div>
            <div class="column">
              <label for="bread">Spinach</label>
              <input class="form-box" type="checkbox"  value="spinach" onChange={addItem}/>
            </div>
            <div class="column">
              <label for="bread">Kale</label>
              <input class="form-box" type="checkbox"  value="kale" onChange={addItem}/>
            </div>
        </section>

        <section class="selects">
            <div class="column">
              <label for="bread">Cauliflower</label>
              <input class="form-box" type="checkbox"  value="cauliflower" onChange={addItem}/>
            </div>
            <div class="column">
              <label for="bread">Cabbage</label>
              <input class="form-box" type="checkbox"  value="cabbage" onChange={addItem}/>
            </div>
            <div class="column">
              <label for="bread">broccoli</label>
              <input class="form-box" type="checkbox"  value="broccoli" onChange={addItem}/>
            </div>
        </section>

        <section class="selects">
            <div class="column">
              <label for="bread">Carrots</label>
              <input class="form-box" type="checkbox"  value="bread" onChange={addItem}/>
            </div>
            <div class="column">
              <label for="bread">Yucca</label>
              <input class="form-box" type="checkbox"  value="bread"onChange={addItem}/>
            </div>
            <div class="column">
              <label for="bread">Sweet Potato</label>
              <input class="form-box" type="checkbox"  value="bread"onChange={addItem}/>
            </div>
        </section>
    </div>



      <div class="category">
        <h3>Grains</h3>
        <section class="selects">
            <div class="column">
              <label for="bread">oats</label>
              <input class="form-box" type="checkbox"  value="oats" onChange={addItem}/>
            </div>
            <div class="column">
              <label for="bread">wheat</label>
              <input class="form-box" type="checkbox"  value="wheat" onChange={addItem}/>
            </div>
            <div class="column">
              <label for="bread">barley</label>
              <input class="form-box" type="checkbox"  value="barley" onChange={addItem}/>
            </div>
        </section>
        <section class="selects">

            <div class="column">
              <label for="bread">rice</label>
              <input class="form-box" type="checkbox"  value="rice" onChange={addItem}/>
            </div>
            <div class="column">
              <label for="bread">pasta</label>
              <input class="form-box" type="checkbox"  value="pasta" onChange={addItem}/>
            </div>
            <div class="column">
              <label for="bread">quinoa</label>
              <input class="form-box" type="checkbox"  value="quinoa" onChange={addItem}/>
            </div>
        </section>
        <section class="selects">

            <div class="column">
              <label for="bread">farro</label>
              <input class="form-box" type="checkbox"  value="farro" onChange={addItem}/>
            </div>
            <div class="column">
              <label for="bread">millet</label>
              <input class="form-box" type="checkbox"  value="millet" onChange={addItem}/>
            </div>
            <div class="column">
              <label for="bread">couscous</label>
              <input class="form-box" type="checkbox"  value="couscous" onChange={addItem}/>
            </div>
        </section>
      </div>



      <div class="category">
        <h3>Proteins</h3>
          <section class="selects">
              <div class="column">
                <label for="bread">Beans</label>
                <input class="form-box" type="checkbox" name="beans" value="beans" onChange={addItem}/>
              </div>
              <div class="column">
                <label for="bread">Tofu</label>
                <input class="form-box" type="checkbox" name="tofu" value="tofu" onChange={addItem}/>
              </div>
              <div class="column">
                <label for="bread">Nuts</label>
                <input class="form-box" type="checkbox" name="nuts" value="nuts" onChange={addItem}/>
              </div>
          </section>
          <section class="selects">
              <div class="column">
                <label for="bread">Seeds</label>
                <input class="form-box" type="checkbox" name="seeds" value="seeds" onChange={addItem}/>
              </div>
              <div class="column">
                <label for="bread">Wheat Gluten</label>
                <input class="form-box" type="checkbox" name="wheat gluten" value="wheat gluten" onChange={addItem}/>
              </div>
              <div class="column">
                <label for="bread">Broccoli</label>
                <input class="form-box" type="checkbox" name="broccoli" value="broccoli" onChange={addItem}/>
              </div>
          </section>
          <section class="selects">
              <div class="column">
                <label for="bread">Carrots</label>
                <input class="form-box" type="checkbox" name="carrots" value="carrots" onChange={addItem}/>
              </div>
              <div class="column">
                <label for="bread">Yucca</label>
                <input class="form-box" type="checkbox" name="yucca" value="yucca" onChange={addItem}/>
              </div>
              <div class="column">
                <label for="bread">Sweet Potato</label>
                <input class="form-box" type="checkbox" name="sweet potato" value="sweet potato" onChange={addItem}/>
              </div>
          </section>
      </div>


      <button type="button" id="search" onClick={buttonClick}>Submit</button>
    </form>
  )

}

export default Form;
