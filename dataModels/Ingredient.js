const mongoose = require("mongoose")
const Schema = mongoose.Schema


//Create Schema
const IngredientSchema = new Schema({
    item: String,
    category: String
})

module.exports = Meal = mongoose.model("food", IngredientSchema)
