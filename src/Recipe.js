import React from 'react';
import style from './Recipe.module.css';

const Recipe = ({title,calories,ingredients,image}) => {
    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img className={style.img} src={image} alt="" />   
            <h2>Ingredients:</h2>
            <ol>
                {ingredients.map( ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p><b>Calory Count =</b>{calories}</p> 
        </div>
    )
}

export default Recipe
