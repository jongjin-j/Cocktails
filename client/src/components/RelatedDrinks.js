import React from 'react'
import { useHistory } from 'react-router-dom'
import '../styles/Detail.css'

export default function RelatedDrinks({ relatedDrinks }) {
    let history = useHistory()

    return (
        <div>
            <h2>Similar Drinks</h2>
            <div className="buttonsContainer">
              {relatedDrinks.map((rel) => {
                return(
                  <button 
                    type="button" 
                    class="btn btn-info" 
                    onClick={() => 
                    history.push(`/cocktails/${rel}`
                    )}
                  >{rel}</button>
                )
              })}
            </div>
        </div>
    )
}
