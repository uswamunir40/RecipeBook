import recipeModel from "../../modals/RecipeModal/index.js";
const recipesController = {
    getAll: async (req, res) => {
        try {
            const recipes = await recipeModel.findAll({
            });
            res.status(200).json({
                data: recipes
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });

        }
    },
    create: async (req, res) => {
        try {
            const payload = req.body;
            console.log("Payload is ", payload);
            const recipe = new recipeModel();
            recipe.title = payload.title;
            recipe.ingredients = payload.ingredients;
            await recipe.save();
            res.status(200).json({ message: "recipe created", recipe });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" });

        }
    }
}
export default recipesController;