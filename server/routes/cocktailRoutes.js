const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/', (req, res) => {
    res.send('hi')
})

router.get('/cocktail', async (req, res) => {
    const cocktail = 'margarita'
    const api_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktail}` //add cocktail name

    const request = await axios.get(api_URL)
    const apiData = request.data.drinks[0]

    const cocktailGlass = apiData.strGlass
    const instructions = apiData.strInstructions
    const imageLink = apiData.strDrinkThumb

    // a function to measure how long the ingredients are, put it into an object //

    const sendObject = {
        "cocktailGlass": cocktailGlass, 
        "instructions": instructions,
        "imageLink": imageLink, 
        "ingredients": [],
        "measure": []
    }

    res.json(sendObject)
})

module.exports = router