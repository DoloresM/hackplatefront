const Router = require("koa-router");
const router = new Router();
const Food = require("../dataModels/Ingredient");


router.get("/search", async ctx =>{
  await Food.find()
  .then(food => {
    console.log(food.data)
    ctx.body = food
  })
  .catch(err =>{
    ctx.body = "error " + err
  })
})




router.get("/", async ctx =>{
ctx.body = "hello";
})

router.post("/search", async ctx =>{
  if (!ctx.request.body.food_name){
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

router.put("/search", async ctx =>{
  if(!ctx.request.body.food_name){
    ctx.body = {
      error: "Bad Data"
    }
  } else {
    await Food.findOneAndUpdate(
      {_id: ctx.params.id},
      {food_name: ctx.request.body.food_name}
    )
    .then(()=>{
      ctx.body = {status: "Ingredient Updated!"}
    })
    .catch(err => {
      ctx.body = "error: " + err
    })
  }
})


module.exports = router
