import React from 'react'
import CocktailDetail from '../components/CocktailDetail'
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
            <Switch>
              <Route path={`${match.path}/:cocktailName`}>
                <Cocktail/>
              </Route>
            </Switch>
        </div>
    )
}
