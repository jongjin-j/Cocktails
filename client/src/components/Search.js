import React from 'react'
import '../styles/Search.css'

export default function Search( {inputHandler, submitHandler} ) {
    return (
        <div className="searchBar">
            <form onSubmit={submitHandler}>
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
