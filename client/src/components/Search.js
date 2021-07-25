import React from 'react'
import '../App.css'

export default function Search( {inputHandler} ) {

    return (
        <form>
            <p>Look up a cocktail: </p>
            <label>
                <input 
                    type="text"
                    placeholder="Search a cocktail"
                    name="cocktailSearch"
                    onChange={inputHandler}
                />
            </label>
            <button type="submit">Search</button>
        </form>
    )
}
