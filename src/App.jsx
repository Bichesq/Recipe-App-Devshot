import { useState, useEffect } from 'react'
import './App.css'
import RecipeCard from './components/RecipeCard';
import SearchBar from './components/SearchBar';
const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url)
    const data =  await res.json();
    
  
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchRecipes()
    };
  
  return (
    <div className='container'>
      
      <h1>Our Recipe App</h1>
      <SearchBar value={query} onSubmit={handleSubmit} isLoading={isLoading} onChange={e => setQuery(e.target.value)} />
      <div className='recipes'>
        {recipes ? recipes.map(recipe => 
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        ) : "No Recipes!"}
        
      </div>
      
    

    </div>
  )
}

export default App
