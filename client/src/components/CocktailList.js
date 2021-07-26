import React from 'react'
import '../styles/Search.css'

export default function CocktailList({ filteredList }) {
    return (
        <div className="list-group">
            {filteredList.map((c) => {
                return(
                    <a href={'/cocktails/' + c.name} className="list-group-item list-group-item-action" key={c.name}>{c.name}</a>
                )
            })}
        </div>
    )
}

