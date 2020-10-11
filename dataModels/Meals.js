const mongoose = require("mongoose")
const Schema = mongoose.Schema


//Create Schema
const MealSchema = new Schema({
  food_name:{
    item: String,
    category: String
  }
})

module.exports = Meal = mongoose.model("meal", MealSchema)
