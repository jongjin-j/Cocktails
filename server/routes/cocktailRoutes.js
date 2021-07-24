const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res) => {
    res.send('hi')
})

router.get(`/cocktail/:cocktail`, async (req, res) => {
    const cocktailName = req.params.cocktail
    const api_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}` //add cocktail name
    
    const request = await axios.get(api_URL)
    
    if(request.data.drinks === null){
        return res.status(404).json({'error': 'does not exist'})
    }
    
    const apiData = request.data.drinks[0]

    const cocktailGlass = apiData.strGlass
    const instructions = apiData.strInstructions
    const imageLink = apiData.strDrinkThumb

    const ingredientsList = []
    const measuresList = []

    // a function to measure how long the ingredients are, put it into an object //

    let count = 0

    while(apiData["strIngredient" + (count + 1).toString()] !== null){
        const ingredientString = "strIngredient" + (count + 1).toString()
        const measureString = "strMeasure" + (count + 1).toString()

        const ingredient = apiData[ingredientString]
        const measure = apiData[measureString]

        ingredientsList.push(ingredient)
        measuresList.push(measure)

        count++
    }


    const sendObject = {
        "cocktailGlass": cocktailGlass, 
        "instructions": instructions,
        "imageLink": imageLink, 
        "ingredients": ingredientsList,
        "measure": measuresList
    }

    res.json(sendObject)
})

module.exports = router