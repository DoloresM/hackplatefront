const Router = require("koa-router")
const router = new Router()
const Food = require("../dataModels/Ingredient")


router.get("/search", async ctx =>{
  await Food.find()
  .then(tasks => {
    ctx.body = tasks
  })
  .catch(err =>{
    ctx.body = "error " + err
  })
})

router.post("/search", async ctx =>{
  if (!ctx.request.body.task_name){
    ctx.body = {
      error: "Bad Data"
    }
  } else {
    var food = new Food()
    food.food_name = ctx.request.body.food_name
    await food
    .save()
    .then(data =>{
      ctx.body = data
    })
    .catch(err =>{
      ctx.body = "error: " + err
    })
  }
})
module.exports = router
