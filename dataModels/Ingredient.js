const mongoose = require("mongoose")
const Schema = mongoose.Schema


//Create Schema
const IngredientSchema = new Schema({
  food_name:{
    type: String
  }
})


module.exports = Meal = mongoose.model("food", IngredientSchema)
