import React, { useEffect, useState } from 'react'
import cocktailService from './services/cocktailData'

function App() {

  const [cocktail, setCocktail] = useState('Margarita')
  const [cocktailGlass, setCocktailGlass] = useState('')
  const [instructions, setInstructions] = useState('')

  const baseURL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}`

  useEffect(() => {
    cocktailService 
      .getData(baseURL)
      .then(res => {
        setCocktailGlass(res.drinks[0].strGlass)
        setInstructions(res.drinks[0].strInstructions)
      })
  }, [cocktail, baseURL])

  return (
    <div>
      <p>{cocktailGlass}</p>
      <p>{instructions}</p>
    </div>
  );
}

export default App;
