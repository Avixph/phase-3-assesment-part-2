const db = require("../db");
const LambRecipe = require("../models/lambRecipes");
const OriginCountry = require("../models/originCountry");

db.on("error", console.error.bind(console, "MongoDB Connection Error!"));

const main = async () => {
  const originCountry1 = await new OriginCountry({
    name: "South Africa",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg",
    moto: "ǃke e꞉ ǀxarra ǁke",
  });
  originCountry1.save();

  const originCountry2 = await new OriginCountry({
    name: "Pakistan",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg",
    moto: "ایمان، اتحاد، نظ",
  });
  originCountry2.save();

  const originCountry3 = await new OriginCountry({
    name: "Japan",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg",
    moto: " ",
  });
  originCountry3.save();

  const originCountry4 = await new OriginCountry({
    name: "France",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
    moto: "Liberté, égalité, fraternité",
  });
  originCountry4.save();

  const originCountry5 = await new OriginCountry({
    name: "Chile",
    country_flag:
      "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg",
    moto: "Por la razón o la fuerzaé",
  });
  originCountry5.save();

  const lambRecipes = [
    {
      title: "Sosatie",
      origin_country: originCountry1._id,
      ingredients: "lamb, onion, garlic, hot pepers, tamarind, curry leaves",
      picture:
        "https://cdn.tasteatlas.com/Images/Dishes/93b563510dab46f49d75667ee0544eda.jpg?w=905&h=510",
    },
    {
      title: "Seekh kabab",
      origin_country: originCountry2._id,
      ingredients:
        "lamb, onion, garlic, ginger, coriander, lemon juice, yogurt, gram masala",
      picture:
        "https://cdn.tasteatlas.com/images/dishes/0e831623c2c94cad86d7df9c217433eb.jpg?w=905&h=510",
    },
    {
      title: "Jingisukan",
      origin_country: originCountry3._id,
      ingredients: "lamb, onion, cabage, leek, bell pepper",
      picture:
        "https://cdn.tasteatlas.com/images/dishes/fe57f72d1d5740429a8e5ecdd4ffdf6b.jpg?w=905&h=510",
    },
    {
      title: "Navarin",
      origin_country: originCountry4._id,
      ingredients:
        "lamb, onion, garlic, turnip, carrot tomato paste, white wine",
      picture:
        "https://cdn.tasteatlas.com/Images/Dishes/88a4beae0af64337a2da18814258c137.jpg?w=905&h=510",
    },
    {
      title: "Cordero al palo",
      origin_country: originCountry5._id,
      ingredients: "lamb, garlic, salt",
      picture:
        "https://cdn.tasteatlas.com/images/dishes/de71e275d3fb450a9a0ed107ef814105.jpg?w=905&h=510",
    },
  ];
  await LambRecipe.insertMany(lambRecipes);
  console.log("Created many lamb recipes!");
};

const run = async () => {
  await main();
  db.close();
};
run();
