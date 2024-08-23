import { Router } from "express";
import recipesController from "../../controllers/recipeController/index.js";
const recipeRouter = Router();
recipeRouter.get("/recipes", recipesController.getAll);
recipeRouter.post("/recipe", recipesController.create);

export default recipeRouter;