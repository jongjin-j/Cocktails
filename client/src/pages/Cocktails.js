import React from 'react'
import CocktailDetail from '../pages/CocktailDetail'
import {Route, Switch, useRouteMatch, useParams } from 'react-router-dom';


function Cocktail(){
    const { cocktailName } = useParams()
    return(
      <CocktailDetail cocktail={cocktailName} />
    )
}

export default function Cocktails() {
    const match = useRouteMatch()

    return(
        <div>
          <h2>Cocktails</h2>
            <Switch>
              <Route path={`${match.path}/:cocktailName`}>
                <Cocktail/>
              </Route>
            </Switch>
        </div>
    )
}
