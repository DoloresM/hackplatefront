const Koa = require("Koa")
const app = new Koa();
const bodyParser = require("koa-body")
const mongoose = require("mongoose")

const searchIngredients = require("./routes/search")

app.use(bodyParser())
app.use(searchIngredients.routes())

mongoose.connect(
  "mongodb://localhost/hmp",
  {useNewUrlParser: true}
)

app.listen(5000, ()=>{
  console.log("Server running at port 5000")
})
