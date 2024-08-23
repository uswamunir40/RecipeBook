import sequelize from "./config.js";
import recipeModel from "../modals/RecipeModal/index.js";
const syncDb = async () => {
    await sequelize.sync({ alter: true, force: false });
    await recipeModel.sync({ alter: true, force: false });
    console.log("Models created");
}

export default syncDb;