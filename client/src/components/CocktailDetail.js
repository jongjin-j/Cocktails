import React, { useEffect, useState } from 'react'
import cocktailService from '../services/cocktailData'
import Navbar from './Navbar'
import IngredientTable from './IngredientTable'
import Converter from './Converter'
import RelatedDrinks from './RelatedDrinks'
import '../styles/Detail.css'

export default function CocktailDetail({ cocktail }) {

  const [cocktailName, setcocktailName] = useState('')
  const [cocktailGlass, setCocktailGlass] = useState('')
  const [instructions, setInstructions] = useState('')
  const [imageLink, setImageLink] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [relatedDrinks, setRelatedDrinks] = useState([])

  const baseURL = `https://cocktails-search.herokuapp.com/cocktail/${cocktail}`

  useEffect(() => {
    cocktailService 
      .getData(baseURL)
      .then(res => {
        setcocktailName(res.name)
        setCocktailGlass(res.cocktailGlass)
        setInstructions(res.instructions)
        setImageLink(res.imageLink)
        setIngredients(res.ingredients)
        setRelatedDrinks(res.relatedDrinks)
      })
  }, [baseURL])

    return (
        <div className="detail">
          <Navbar/>

          <h1>{cocktailName}</h1>

          <Converter/>

          <div className="detailComponents">
            <div className="imageContainer">
              <img src={imageLink} alt="cocktailImage"/>
              <p>Served in {cocktailGlass}</p>
            </div>
          
            <div className="instructions">
              <h3>Instructions: </h3>
              <p>{instructions}</p>
            </div>

            <div className="ingredientTable">
              <IngredientTable ingredients={ingredients} />
            </div>
          </div>

          <div className="related">
            <RelatedDrinks relatedDrinks={relatedDrinks}/>
          </div>
        </div>
    )
}
