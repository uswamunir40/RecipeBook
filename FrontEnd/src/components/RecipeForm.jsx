import React, { useState } from 'react';
import axiosInstance from '../axios/axios.js';

const RecipeForm = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newRecipe = { title, ingredients };
            const response = await axiosInstance.post('/recipe', newRecipe);
            setTitle('');
            setIngredients('');
            console.log(response);
        } catch (error) {
            console.error('Error posting recipe:', error);
        }
    };
   

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg p-4">  
            <h2 className="text-2xl font-bold mb-4 mt-10 text-center">Post a New Recipe</h2> 
            <div className="mb-4">
                <label className="block text-gray-700 text-xl font-semibold">Recipe Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-xl font-semibold">Ingredients</label>
                <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    className="w-full p-2 border"
                    rows="6"
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 hover:bg-blue-600"
            >
                Post Recipe
            </button>
        </form>
    );
};

export default RecipeForm;
