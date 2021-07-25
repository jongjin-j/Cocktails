import React, { useState } from 'react'
import Search from '../components/Search'

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

    const [serachInput, setSearchInput] = useState('')

    const filteredList = filterCocktails(cocktails, serachInput)

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    return (
        <div>
            <h2>Home</h2>
            <Search inputHandler={handleChange}/>
            <ul>
                {filteredList.slice(0, 10).map((c) => {
                    return(
                        <a href={'/cocktails/' + c.name} key={c.id}>
                            <li>{c.name}</li>
                        </a>
                    )
                })}
            </ul>
        </div>
    )
}
