import React from 'react'
import '../styles/Search.css'

export default function CocktailList({ filteredList }) {
    return (
        <div className="list-group">
            {filteredList.map((c) => {
                return(
                    <a href={'/cocktails/' + c.name} class="list-group-item list-group-item-action">{c.name}</a>
                )
            })}
        </div>
    )
}

