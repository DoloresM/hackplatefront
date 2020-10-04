const Router = require("koa-router");
const router = new Router();
const Food = require("../dataModels/Ingredient");

router.get("/", async ctx =>{
ctx.body = "hello";
})

//TODO: ROUTES
  //GET ALL INGREDIENTDS (model.find)
  //GET SELECTED INGREDIENT (model.find)

router.get("/search", async ctx =>{
  //const query = ctx.request.query.item ? {item:ctx.request.query.item} : null;
  const food = await Food.find();
  ctx.body = food;
  //console.log(JSON.stringify(ctx.request.query.item, null,2))
  return JSON.stringify(food, null,2)
})

router.post("/search", async ctx =>{
  
  //const query = ctx.request.query.item ? {item:ctx.request.query.item} : null;
  
  const food = await Food.findOne({"_id":"5f6bf21f055ab3232148c5a6"});
  ctx.body = food;
  // console.log(JSON.stringify(ctx.request.query.item, null,2))
  console.log(JSON.stringify(food, null,2));
})

/*
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
*/


module.exports = router
