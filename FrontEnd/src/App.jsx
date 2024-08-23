import React from 'react';
import RecipeCard from './components/RecipeCard';
import RecipeForm from './components/RecipeForm';

const App = () => {
    return (
      <div className="container mx-auto p-7">
            <div className="flex flex-col items-center"> 
                <h1 className="text-center text-4xl font-bold mt-9 mb-8">Recipes</h1>
                <RecipeCard />
                <RecipeForm />
            </div>
        </div>
    );
};

export default App;
