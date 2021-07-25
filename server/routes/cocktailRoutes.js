const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/home', (req, res) => {
    res.send('home')
})

router.get(`/cocktail/:cocktail`, async (req, res) => {
    const cocktailName = req.params.cocktail
    const api_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`
    
    const request = await axios.get(api_URL)
    
    if(request.data.drinks === null){
        return res.status(404).json({'error': 'does not exist'})
    }
    
    const apiData = request.data.drinks[0]

    const actualCocktailName = apiData.strDrink
    const cocktailGlass = apiData.strGlass
    const instructions = apiData.strInstructions
    const imageLink = apiData.strDrinkThumb

    const ingredientsList = []

    // a function to measure how long the ingredients are, put it into an object //

    let count = 0

    while(apiData["strIngredient" + (count + 1).toString()] !== null){
        const ingredientString = "strIngredient" + (count + 1).toString()
        const measureString = "strMeasure" + (count + 1).toString()

        const ingredientName = apiData[ingredientString]
        const measures = apiData[measureString]

        const ingredientObject = {"name": ingredientName, "measure": measures}
        ingredientsList.push(ingredientObject)

        count++
    }


    const sendObject = {
        "name": actualCocktailName,
        "cocktailGlass": cocktailGlass, 
        "instructions": instructions,
        "imageLink": imageLink, 
        "ingredients": ingredientsList
    }

    res.json(sendObject)
})

module.exports = router