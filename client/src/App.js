import React, { useEffect, useState } from 'react'
import cocktailService from './services/cocktailData'
import cocktailDetail from './pages/cocktailDetail'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {

  const [cocktail, setCocktail] = useState('Margarita')
  const [cocktailGlass, setCocktailGlass] = useState('')
  const [instructions, setInstructions] = useState('')
  const [imageLink, setImageLink] = useState('')
  const [ingredients, setIngredients] = useState([])
  const [measures, setMeasures] = useState([])

  const baseURL = `http://localhost:4000/cocktail/${cocktail}`

  useEffect(() => {
    cocktailService 
      .getData(baseURL)
      .then(res => {
        setCocktailGlass(res.cocktailGlass)
        setInstructions(res.instructions)
        setImageLink(res.imageLink)
        setIngredients(res.ingredients)
        setMeasures(res.measures)
      })
  }, [cocktail, baseURL])

  const cocktailList = ["margarita", "mojito"]

  return (
    <div>
      <p>{cocktailGlass}</p>
      <p>{instructions}</p>
      <p>{imageLink}</p>
      <p>{ingredients}</p>
      <p>{measures}</p>
    </div>
    /*<div>
      <Router>
        <Switch>
          {cocktailList.map(cocktail => {
            <Link to={'cocktail/' + cocktail}/>
          })}
          <Route path="cocktail/:cocktailName" component={cocktailDetail}/>
        </Switch>
      </Router>
    </div>*/
  );
}

export default App;
