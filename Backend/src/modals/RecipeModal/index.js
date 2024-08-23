import { DataTypes } from "sequelize";
import sequelize from "../../db/config.js";


const recipeModel = sequelize.define("Recipe", {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ingredients: {
        type: DataTypes.TEXT,
        allowNull: false
    }

});

export default recipeModel;