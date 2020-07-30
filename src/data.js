export const fruits = ["banana", "apple", "kiwi", "dates", "watermelon",
 "pomegranate", "figs", "blueberries", "strawberries", "raspberries",
 "nectarines", "plums", "peaches", "cherries", "lemons", "limes", "oranges",
 "grapefruits", "clementines", "apricot", "cantaloupe", "honeydew", "papaya",
 "mango", "dragonfruit", "lychee", "pineapple", "passionfruit", "durian",
 "guava", "jackfruit"
]

export const  vegetables = ["Kale", "spinach", "arugula", "collard greens", "cauliflower",
   "broccoli", "red cabbage", "green cabbage", "napa cabbage", "brussel sprouts",
   "parsnips", "carrots", "sweet potato", "yams","white sweet potato", "potatoes", "turnips",
    "rutabagas", "Zucchini", "Cucumber", "Asparagus", "Beets", "Bell peppers", "Carrots", "Artichokes",
    "Tomatoes", "hot pepper", "Celery", "Avocado","Onions","Mushrooms","Garlic","Eggplant",
    "Ginger","Sweet potatoes","Potatoes","butternut", "acorn","kabocha", "pumpkin", "hubbard",
    "Zucchini","Green beans", "green peas", "snap peas"];

export const soy = ["Tofu", "Tempeh", "Edamame", "Soy protein", "Soy milk"];

export const butter = ["almond butter", "cashew butter", "peanut butter",
                "tahini", "sunflower seed butter"];

export const dairyAlternative = ["almond milk", "oat milk", "soy milk", "rice milk",
                          "hemp milk", "cashew milk", "coconut milk",
                          "coconut yogurt", "almond yogurt", "cashew yogurt", "cashew cheese",
                          "vegan sour cream", "vegan cream cheese", "coconut creamer", "vegan ice cream", "vegan butter"];

export const nutsAndSeeds = ["pecans", "walnuts", "cashews", "brazil nuts", "pistachios", "hazelnuts",
   "pine nuts", "sunflower seeds", "hemp seed", "chia seeds", "flaxseeds", "pumpkin seed",
    "sesame seeds"];

export const wholeGrains = ["oats", "brown rice", "wild rice", "quinoa", "farro", "freekeh", "millet",
   "amaranth", "teff", "buckwheat", "barley", "bread", "bun", "tortilla", "brown rice pasta",
    "quinoa pasta", "whole wheat pasta", "Rice cakes", "quinoa flour", "buckwheat flour", "whole wheat flour" ];

export const ingredients = [...fruits, ...vegetables, ...soy, ...butter, ...dairyAlternative, ...nutsAndSeeds, ...wholeGrains]

 export const meals = [
  {
    id:1,
    title:"Mac and Cheese",
    img: "https://cookieandkate.com/images/2017/06/best-vegan-mac-and-cheese-recipe.jpg",
    mealType: "lunch/dinner",
    flavor:["savory","spicy"],
    indgredients:["macaroni pasta","broccoli","olive oil","onion","potato","garlic","sea salt", "mustard","red pepper flakes","cashews","nutritional yeast"],
    duration: 40,
    link:"https://cookieandkate.com/vegan-mac-and-cheese-recipe/"
  },
  {
    id:2,
    title:"Creamy Vegan Pasta",
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2017/10/vegan-pasta.jpg",
    mealType: "lunch/dinner",
    flavor:["savory","creamy"],
    indgredients:["White beans","Nutritional yeast","Onion powder & garlic","Pasta"],
    duration: 30,
    link:"https://www.loveandlemons.com/vegan-pasta/"
  },
  {
    id:3,
    title:"Vegan Letil Cakes",
    img: "https://www.feastingathome.com/wp-content/uploads/2018/02/vegan-lentil-cakes-106.jpg",
    mealType: "lunch/dinner",
    flavor:["savory"],
    indgredients:["lentils","red onion","garlic cloves","mushrooms","walnuts", "flaxseeds", "salt", "soy sauce", "parsley", "vegan yogurt"],
    duration: 30,
    link:"https://www.loveandlemons.com/vegan-pasta/"
  }

]
