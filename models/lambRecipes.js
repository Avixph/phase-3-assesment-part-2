const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LambRecipe = new Schema(
  {
    title: { type: String, required: true },
    origin_country: { type: Schema.Types.ObjectId, ref: "origin_countries" },
    ingredients: { type: String, required: true },
    picture: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("lamb_recipes", LambRecipe);
