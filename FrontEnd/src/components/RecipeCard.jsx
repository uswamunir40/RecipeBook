import React, { useEffect, useState } from 'react';
import axiosInstance from "../axios/axios";


const RecipeCard = () => {
    const [recipes, setRecipes] = useState([]);
    const fetchRecipes = async () => {
        try {
            const response = await axiosInstance.get('/recipes');
            // console.log(response.data.data);
            setRecipes(response.data.data);
        } catch (error) {
            console.error('Error fetching recipes:', error);
        }
    };

    useEffect(() => {
        fetchRecipes();
    }, [recipes]);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {recipes.map((recipe) => (
                <div key={recipe.id} className="border rounded-lg p-4 shadow-lg">
                    <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
                    <p className="text-gray-700">{recipe.ingredients}</p>
                </div>
            ))}
        </div>
    );
};

export default RecipeCard;
