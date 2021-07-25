import React from 'react'
import '../styles/Search.css'

export default function Search( {inputHandler} ) {
    return (
        <div className="searchBar">
            <form>
                <label>
                    <input 
                        type="text"
                        placeholder="Search a cocktail"
                        name="cocktailSearch"
                        onChange={inputHandler}
                    />
                </label>
            </form>
        </div>
    )
}
