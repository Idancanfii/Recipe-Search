import React, { useState,useEffect } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const APP_ID = '0e2b52fe';
  const APP_KEY = '5ad2ceb2e5fa5796df87b280c455e484';
  
  const [ recipes, setRecipes ] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ query, setQuery ] = useState('')


  const getData = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }


  useEffect( () => {
    getData();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  }

  const getSearchTerm = (e) => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form className="form" onSubmit={getSearchTerm}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}></input>
        <button className="button" type="submit">Search</button>
      </form>
      <div className="recipe">
    {recipes.map( recipe => (
      <Recipe key={recipe.recipe.id}
              title={recipe.recipe.label} 
              ingredients={recipe.recipe.ingredients}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}  />
    ))};
      </div>
    </div>
  );
}

export default App;
