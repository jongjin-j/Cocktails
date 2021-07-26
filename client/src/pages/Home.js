import React, { useState } from 'react'
import Search from '../components/Search'
import CocktailList from '../components/CocktailList'
import EmptyList from '../components/EmptyList'
import Navbar from '../components/Navbar'
import '../App.css'
import { useHistory } from 'react-router-dom'


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

    let history = useHistory()

    const [searchInput, setSearchInput] = useState('')

    const filteredList = filterCocktails(cocktails, searchInput)

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/cocktails/${e.target[0].value}`)
    }

    return (
        <div className="home">
            <Navbar/>
            <h2>Cocktail Search</h2>
            <div className="container">
                <Search inputHandler={handleChange} submitHandler={handleSubmit}/>
                {searchInput !== '' ? 
                    <CocktailList filteredList={filteredList}/> :
                    <EmptyList/>
                }
            </div>
        </div>
    )
}
