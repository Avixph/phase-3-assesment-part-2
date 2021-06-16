const LambRecipe = require("../models/lambRecipes");
const OriginCountry = require("../models/originCountry");

const createRecipe = async (req, res) => {
  try {
    const recipe = await new LambRecipe(req.body);
    await recipe.save();
    return res.status(201).json({ recipe });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await LambRecipe.find();
    return res.status(200).json({ recipes });
  } catch (error) {
    return res.status(500).send(eror.message);
  }
};

const getRecipeByID = async (req, res) => {
  try {
    const { id } = req.params;
    const recipe = await LambRecipe.findById(id);
    if (recipe) {
      return res.status(200).json({ recipe });
    }
    return res.status(404).send("Airline not found!");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    await LambRecipe.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, recipe) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!airline) {
          res.status(500).send("Recipe not found!");
        }
        return res.status(200).json(recipe);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteRecipe = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await LambRecipe.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Recipe deleted.");
    }
    throw new Error("Recipe not found!");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

/*******/
const getAllRecipesByCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const recipes = await LambRecipe.find({ origin_country: id });
    return res.status(200).json({ recipes });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};
/*******/

const createCountry = async (req, res) => {
  try {
    const country = await new OriginCountry(req.body);
    await country.save();
    return res.status(201).json({ country });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllCountries = async (req, res) => {
  try {
    const countries = await OriginCountry.find();
    return res.status(200).json({ countries });
  } catch (error) {
    return res.status(500).send(eror.message);
  }
};

const getCountryByID = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await OriginCountry.findById(id);
    if (country) {
      return res.status(200).json({ country });
    }
    return res.status(404).send("Country not found!");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const updateCountry = async (req, res) => {
  try {
    const { id } = req.params;
    await OriginCountry.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, country) => {
        if (err) {
          res.status(500).send(err);
        }
        if (!country) {
          res.status(500).send("Country not found!");
        }
        return res.status(200).json(country);
      }
    );
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await OriginCountry.findByIdAndDelete(id);
    if (deleted) {
      return res.status(200).send("Country deleted.");
    }
    throw new Error("Country not found!");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeByID,
  updateRecipe,
  deleteRecipe,
  getAllRecipesByCountry,
  createCountry,
  getAllCountries,
  getCountryByID,
  updateCountry,
  deleteCountry,
};
