import React, { useEffect, useState } from 'react'
import cocktailService from '../services/cocktailData'

export default function CocktailDetail({ cocktail }) {

  const [cocktailName, setcocktailName] = useState('')
  const [cocktailGlass, setCocktailGlass] = useState('')
  const [instructions, setInstructions] = useState('')
  const [imageLink, setImageLink] = useState('')
  const [ingredients, setIngredients] = useState([])

  const baseURL = `http://localhost:4000/cocktail/${cocktail}`

  useEffect(() => {
    cocktailService 
      .getData(baseURL)
      .then(res => {
        setcocktailName(res.name)
        setCocktailGlass(res.cocktailGlass)
        setInstructions(res.instructions)
        setImageLink(res.imageLink)
        setIngredients(res.ingredients)
      })
  }, [baseURL])

    return (
        <div>
            <p>{cocktailName}</p>
            <p>{cocktailGlass}</p>
            <p>{instructions}</p>
            <p>{imageLink}</p>
            <p>Ingredients: </p>
            {ingredients.map(ingr => {
              return(
                <div key={ingr.name}>
                  <p>{ingr.name}</p>
                  <p>{ingr.measure}</p>
                </div>
              )
            })}
        </div>
    )
}
