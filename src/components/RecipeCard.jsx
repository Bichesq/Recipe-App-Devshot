import React from 'react'

const RecipeCard = ({ recipe }) => {
    const { idMeal, strMeal, strCategory, strMealThumb, strArea } = recipe;
    return (
        <div className='card'>
            <img src={strMealThumb} alt={strMeal} className='card-image' />
            <div className="card-body">
                <span className='category'>{strCategory}</span>
                <h1>{strMeal}</h1>
                <p>{ strArea} meal</p>
                <a href={'https://www.themealdb.com/meal/'+idMeal}>Ingredients</a>
            </div>
        </div>
    )
}

export default RecipeCard

