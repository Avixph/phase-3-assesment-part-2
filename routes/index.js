const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", (req, res) => {
  res.send("This is the root");
});

router.post("/lambRecipes", controllers.createRecipe);

router.get("/lambRecipes", controllers.getAllRecipes);

router.get("/lambRecipes/:id", controllers.getRecipeByID);

router.post("/lambRecipes/:id", controllers.updateRecipe);

router.delete("/lambRecipes/:id", controllers.deleteRecipe);

/************************/
router.get(
  "/lambRecipes/:id/originCountries",
  controllers.getAllRecipesByCountry
);
/************************/

router.post("/originCountries", controllers.createCountry);

router.get("/originCountries", controllers.getAllCountries);

router.get("/originCountries/:id", controllers.getCountryByID);

router.post("/originCountries/:id", controllers.updateCountry);

router.delete("/originCountries/:id", controllers.deleteCountry);

module.exports = router;
