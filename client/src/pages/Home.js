import React, { useState } from 'react'
import Search from '../components/Search'
import CocktailList from '../components/CocktailList'
import EmptyList from '../components/EmptyList'
import '../App.css'

const cocktails = [
    { id: '1', name: 'Mojito' },
    { id: '2', name: 'Margarita' },
    { id: '3', name: 'Moscow Mule' },
    { id: '4', name: 'Tequila Sour' },
    { id: '5', name: 'Karsk' },
    { id: '6', name: 'Stinger' },
    { id: '7', name: 'The Last Word' },
    { id: '8', name: 'Bellini Martini' },
    { id: '9', name: 'Victory Collins' },
    { id: '10', name: 'Nuked Hot Chocolate' },
    { id: '11', name: 'Whiskey Sour' }
]

const filterCocktails = (cocktailList, input) => {
    if(!input){
        return cocktailList
    }

    return cocktailList.filter((c) => {
        const cName = c.name.toLowerCase()
        return cName.includes(input)
    })
}

export default function Home() {

    const [searchInput, setSearchInput] = useState('')

    const filteredList = filterCocktails(cocktails, searchInput)

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    return (
        <div className="home">
            <h2>Cocktail Search</h2>
            <div className="container">
                <Search inputHandler={handleChange}/>
                {searchInput !== '' ? 
                    <CocktailList filteredList={filteredList}/> :
                    <EmptyList/>
                }
            </div>
        </div>
    )
}
