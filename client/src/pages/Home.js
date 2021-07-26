import React, { useState } from 'react'
import Search from '../components/Search'
import CocktailList from '../components/CocktailList'
import EmptyList from '../components/EmptyList'
import Navbar from '../components/Navbar'
import '../App.css'
import { useHistory } from 'react-router-dom'
import data from '../data/data.json'

const cocktails = data

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
